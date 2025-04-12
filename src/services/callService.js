const prisma = require("../database/prismaClient");

const startCall = async (operatorId, clientId) => {
  const newCall = await prisma.call.create({
    data: {
      operatorId,
      clientId,
      status: "pending",
    },
  });

  return newCall;
};


const endCall = async (callId) => {
  const call = await prisma.call.update({
    where: { id: callId },
    data: {
      status: "completed",
      endedAt: new Date(), 
    },
  });

  // Calcular duração
  const durationInSeconds = (new Date() - new Date(call.createdAt)) / 1000;
  return { ...call, durationInSeconds };
};

const getCalls = async (operatorId, status) => {
  const filter = {};

  if (operatorId) {
    filter.operatorId = operatorId;
  }

  if (status) {
    filter.status = status;
  }

  const calls = await prisma.call.findMany({
    where: filter,
  });

  return calls;
};

const getCallsInQueue = async () => {
  return await prisma.call.findMany({
    where: { status: "waiting" },
  });
};

const pickNextCall = async (operatorId) => {
  // Buscar a primeira chamada na fila (status "waiting")
  const call = await prisma.call.findFirst({
    where: { status: "waiting" },
    orderBy: { createdAt: "asc" },
  });

  if (!call) throw new Error("Não há chamadas na fila.");

  // Atualizar o status da chamada para "in_progress"
  const updatedCall = await prisma.call.update({
    where: { id: call.id },
    data: {
      status: "in_progress",
      operatorId: operatorId,
    },
  });

  return updatedCall;
};

const getCompletedCalls = async () => {
  const calls = await prisma.call.findMany({
    where: { status: "completed" },
  });
  
  return calls;
};




module.exports = { startCall, endCall, getCalls, getCallsInQueue, pickNextCall, getCompletedCalls };

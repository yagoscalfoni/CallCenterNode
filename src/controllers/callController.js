const callService = require("../services/callService");

const startCall = async (req, res) => {
  try {
    const { operatorId, clientId } = req.body;
    if (!operatorId || !clientId) throw new Error("OperatorId e ClientId são obrigatórios");

    const newCall = await callService.startCall(operatorId, clientId);
    res.status(201).json(newCall);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const endCall = async (req, res) => {
  try {
    const { callId } = req.body; // ID da chamada que será finalizada
    const updatedCall = await callService.endCall(callId);
    res.status(200).json(updatedCall);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCalls = async (req, res) => {
  try {
    const { operatorId, status } = req.query; // Pega os parâmetros de filtro da query string
    const calls = await callService.getCalls(operatorId, status);
    res.status(200).json(calls);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCallsInQueue = async (req, res) => {
  try {
    const calls = await callService.getCallsInQueue();
    res.status(200).json(calls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const pickNextCall = async (req, res) => {
  try {
    const operatorId = req.body.operatorId;
    const call = await callService.pickNextCall(operatorId);
    res.status(200).json(call);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCompletedCalls = async (req, res) => {
  try {
    const calls = await callService.getCompletedCalls();
    res.status(200).json(calls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { startCall, endCall, getCalls, getCallsInQueue, pickNextCall, getCompletedCalls };

const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Pega o token do header (Formato: "Bearer token")

  if (!token) return res.status(401).json({ error: "Acesso negado! Token não fornecido." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.operator = decoded; // Adiciona os dados do usuário ao request
    next(); // Passa para a próxima função
  } catch (error) {
    res.status(403).json({ error: "Token inválido!" });
  }
};

module.exports = authenticateToken;

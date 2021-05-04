const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require("../models/TransactionModel");

const findAll = async (require, response) => {
  const name = require.query.name;

  // Condição para o filtro no findAll
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};
  try {
    // Utilizando o Modelo de TransactionModel para fazer a busca
    const transaction = await TransactionModel.find(condition);
    // Enviando o resultado da busca
    response.send(transaction);
    response.end();
    // Log de sucesso
    console.log(`GET /transaction`);
  } catch (error) {
    // Log de erro
    console.log(`GET /transaction - ${JSON.stringify(error.message)}`);
    response
      .status(500)
      .send({ message: error.message || "Erro ao listar todos os documentos" });
  }
};

module.exports = { findAll };

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require("../models/TransactionModel");

/** findAll:
 * Essa função faz as busca de todos os documentos no banco de dados.
 */
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
    console.log(`GET /transaction/`);
  } catch (error) {
    // Log de erro
    console.log(`GET /transaction/ - ${JSON.stringify(error.message)}`);
    response
      .status(500)
      .send({ message: error.message || "Erro ao listar todos os documentos" });
  }
};

/** findOne:
 * Essa função faz a busca de um único documento pelo o seu `id`.
 */
const findOne = async (require, response) => {
  // `id` buscado por parâmetro na rota
  const id = require.params.id;
  try {
    // Utilizando o Modelo de TransactionModel para fazer a busca por id
    const transaction = await TransactionModel.findOne({ _id: id });
    // Enviando o resultado da busca
    response.send(transaction);
    response.end();
    // Log de sucesso
    console.log(`GET /transaction/${id}`);
  } catch (error) {
    // Log de erro
    console.log(`GET /transaction/ - ${JSON.stringify(error.message)}`);
    response.status(500).send({
      message: error.message || "Erro ao buscar o transaction id" + id,
    });
  }
};

/** findPeriod:
 * Essa função faz a busca um documento pelo o seu período.
 */
const findPeriod = async (require, response) => {
  // `yearMonth` buscado por parâmetro na rota
  const yearMonth = require.params.yearMonth.split("-");
  try {
    const transaction = await TransactionModel.find({
      year: yearMonth[0],
      month: yearMonth[1],
    });
    // Enviando o resultado da busca
    response.send(transaction);
    response.end();
    // Log de sucesso
    console.log(`GET /transaction/period/${require.params.yearMonth}`);
  } catch (error) {
    // Log de erro
    console.log(`GET /transaction/period/ - ${JSON.stringify(error.message)}`);
    response
      .status(500)
      .send({ message: error.message || "Erro ao listar todos os documentos" });
  }
};

/** create:
 * Essa função faz a criação de novos documentos.
 */
const create = async (require, response) => {
  const transaction = require.body;
  try {
    // Criando uma nova transaction a partir do modelo
    await TransactionModel.create(transaction);
    // Enviando o resultado da busca
    response.send({ message: "Documento criado com sucesso" });
    // Log de sucesso
    console.log(`GET /transaction/${JSON.stringify(transaction)}`);
  } catch (error) {
    // Log de erro
    console.log(`GET /transaction/ - ${JSON.stringify(error.message)}`);
    response
      .status(500)
      .send({ message: error.message || "Erro ao criar um novo documento" });
  }
};

// Exportando as funções services
module.exports = { findAll, findOne, findPeriod, create };

const express = require("express");
const transactionRouter = express.Router();
/** Importanto o `controller`:
 * é aonde está todas as regras de negócio da aplicação
 */
const controller = require("../services/transactionService");

/** Rota findAll:
 * Essa rota faz as busca de todos os documentos.
 * http://localhost:3001/api/transaction/
 */
transactionRouter.get("/", controller.findAll);

module.exports = transactionRouter;

const express = require("express");
const transactionRouter = express.Router();
/** Importanto o `controller`:
 * é aonde está todas as regras de negócio da aplicação
 */
const controller = require("../services/transactionService");

/** Rota findAll:
 * Essa rota faz as busca de todos os documentos.
 * Ex.: http://localhost:3001/api/transaction/
 */
transactionRouter.get("/", controller.findAll);

/** Rota findOne:
 * Essa rota faz a busca de um único documento pelo o seu `id`.
 * Ex.: http://localhost:3001/api/transaction/6090067f49cc092d94aca769
 */
transactionRouter.get("/:id", controller.findOne);

// Exportando as rotas
module.exports = transactionRouter;

const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** 
 * Rota /Recurso
*/

/**
 * Método HTTP:
 * 
 * GET: Buscar/listar uma infformação do back-end
 * POST: Criar uma informção no back-end
 * PUT: Alterar uma informção no back-end
 * DELETE: Deletar uma informção no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query Params: parametros nomeados enviados na rota apos "?" (filtros, paginação)
 * Route Params: parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, usado para criar ou alterar recurços 
 * 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */


/**
 * Drivers: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


app.listen(3333);

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/** Rota de Login para cria a sessão */
routes.post('/sessions', SessionController.create);

/** Lista todas as ongs cadastradas */
routes.get('/ongs', OngController.index);
/** Cadastra uma nova ong*/
routes.post('/ongs', OngController.create);

/** Lista os casos específicos de uma ong apenas */
routes.get('/profile', ProfileController.index);

/** Lista todos os incidentes */
routes.get('/incidents', IncidentController.index);
/** Cadastra um novo incidente*/
routes.post('/incidents', IncidentController.create);
/** Delete um incidente */
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;
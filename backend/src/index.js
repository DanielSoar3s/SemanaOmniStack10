const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./WebSocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://usuarioseudogit:senha@cluster0-wybqd.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);

//metodos HTTP: GET,POST, PUT E DELETE

//TIPOS DE PARAMETROS:

// Query params: request.query (Filtros, ordenação , paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remorsão)
//Body: request.body (Dados para criação ou alteração de um registro)


server.listen(3333);
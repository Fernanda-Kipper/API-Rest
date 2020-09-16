const express = require('express');
const api = express();


const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require(__dirname + '/rotas.ts')
const port = process.env.PORT || 3333

api.use(cors());
api.use(bodyParser.json());
api.use(routes);
api.use(express.json());

api.listen(port);
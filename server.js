const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const server = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions));
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

router.post('/upload', (request, response) => {
  console.log(request.body);
  response.json();
})

server.use("/", router);

server.listen(8000, () => {
  console.log('Server started!')
})
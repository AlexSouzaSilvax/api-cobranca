const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@omnistack-1bzmc.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//app.use(cors({ origin: 'http://localhost:3333' })); //configura quais ips poderam acessar a api
app.use(cors());

//Transforma as resposta em formato json.
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);

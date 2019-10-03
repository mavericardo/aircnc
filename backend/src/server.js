const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

//connect with database
mongoose.connect(
  "mongodb+srv://marcos:marcos@aircnc-y7maq.mongodb.net/marcos?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);

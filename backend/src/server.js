const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

//connect with database
mongoose.connect("mongodb://localhost:27017/aircnc", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(8080);

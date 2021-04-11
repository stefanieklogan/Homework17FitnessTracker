const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes');

const PORT = process.env.PORT || 3000

const app = express();

//morgan?

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

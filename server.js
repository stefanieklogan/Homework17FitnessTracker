const express = require("express");
const morgan = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

//morgan?

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
require("./routes/htmlRoutes.js");
require("./routes/apiRoutes.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

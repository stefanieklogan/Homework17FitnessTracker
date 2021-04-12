var path = require('path');

module.exports = function(app) {

//route for /
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

//route for /exercise
app.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

//route for /stats
app.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
})
}
var path = require('path');

module.exports = function(app) {

//route for /
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
//route for /exercise

//route for /stats

}
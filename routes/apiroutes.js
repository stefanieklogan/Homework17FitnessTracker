var db = require("..models/workout");
const router = require("express").Router();
const Workout = require("../models/workout.js");

//get all workouts
router.get("/api/workouts", function (req, res) {
    db.find({}).then(function (workout) {
        res.send(workout);
    })
        .catch(function (err) {
            res.send(err);
        });
});

//create workout
router.post("/api/workouts", function (req, res) {
    db.create(req.body).then(function (data) {
        res.send(data)
    })
})

//update workout by id
router.put("/api/workouts/:id", function (req, res) {
    var id = req.params.id;
    db.findByAndUpdate(id, { $push: { exercises: req.body } })
        .then(function (data) {
            res.send(data)
        });
});

//get stats page

module.exports = router;
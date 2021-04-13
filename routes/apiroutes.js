var db = require("../models/workout");
const router = require("express").Router();
const Workout = require("../models/workout.js");

module.exports = function (app) {
    //get all workouts
    app.get("/api/workouts", function (req, res) {
        db.find({}).then(function (workout) {
            res.send(workout);
        })
            .catch(function (err) {
                res.send(err);
            });
    });

    //create workout
    app.post("/api/workouts", function (req, res) {
        db.create(req.body).then(function (data) {
            res.send(data)
        })
    });

    //update workout by id
    app.put("/api/workouts/:id", function (req, res) {
        var id = req.params.id
        db.findByIdAndUpdate(id, { $push: { exercises: req.body } })
            .then(function (data) {
                res.send(data)
            })
    });

    //get stats page
    app.get("/api/workouts/range", (req, res) => {
        db.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //final bracket for module export
}
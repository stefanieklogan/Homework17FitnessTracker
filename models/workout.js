const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//individual workout
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now()
        },
        exercises: {
            type: Array,
            default: []
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

//Total duration calc
workoutSchema.virtual("totalDuration").get(function() {
$addFields: {
    totalDuration: { $sum: '$exercises.duration'}
}
  });


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
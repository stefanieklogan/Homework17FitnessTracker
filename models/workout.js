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
    },
    {$addFields: {totalDuration: { 
        $sum: '$exercises.duration'}
    }
    }
);

//Total duration calc
workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce(function (total, exercise) {
        return total + exercise.duration;
      }, 0);
  });


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
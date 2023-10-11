const DB = require('./db.json')
const { saveToDatabase } = require("./utils")

const getAllWorkout = () => {
  return DB.workouts;
}

const createNewWorkouts = ( newWorkouts ) => {

  console.log(newWorkouts)
  const isAlreadyAdded = DB.workouts.findIndex( (workout) =>  workout.name === newWorkouts.name) > -1

  if(isAlreadyAdded) return;

  DB.workouts.push(newWorkouts);
  saveToDatabase(DB)
  return newWorkouts;
}

module.exports = { getAllWorkout, createNewWorkouts  }
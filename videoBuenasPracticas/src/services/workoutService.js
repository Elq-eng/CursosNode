const workout = require("../database/Workout")
const { v4: uuid} = require("uuid")

const getAllWorkouts = () => { 
  const allWorkouts = workout.getAllWorkout()
  return allWorkouts;
}
const getOneWorkouts = () => { return;}
const createNewWorkouts = (newWorkout) => { 
  const WorkoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updadeAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
  }

  const createNewWorkouts = workout.createNewWorkouts(WorkoutToInsert)
  return createNewWorkouts;
}
const updateOneWorkouts = () => { return;}
const deleteOneWorkouts = () => { return;}



module.exports ={
  getAllWorkouts,getOneWorkouts,createNewWorkouts,updateOneWorkouts,deleteOneWorkouts
}
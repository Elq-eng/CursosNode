const workoutService = require('../services/workoutService')


const getAllWorkouts = (req,res) => {
  const allWorkouts = workoutService.getAllWorkouts()
  res.send({"status":"OK",
"message": allWorkouts});
}


const getOneWorkouts = (req,res) => {
  const oneWorkouts = workoutService.getOneWorkouts(req.params.workoutId)
  res.send(`Get one workout ${req.params.workoutId}`);
}

const createNewWorkouts = (req,res) => {
  const { body } = req;

  if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) return;

  const newWorkouts = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips

  }

  const createNewWorkouts = workoutService.createNewWorkouts(newWorkouts)
  res.status(201).send({"status":"OK",
  "message": createNewWorkouts});
}


const  updateOneWorkouts = (req,res) => {

  const updateWorkouts = workoutService.updateOneWorkouts(req.params.workoutId)
  res.send(`Update one workout ${req.params.workoutId}`);
}



const  deleteOneWorkouts = (req,res) => {
  const deleteWorkouts = workoutService.deleteOneWorkouts(req.params.workoutId)
  res.send(`delete one workout ${req.params.workoutId}`);
}


module.exports ={
  getAllWorkouts,getOneWorkouts,createNewWorkouts,updateOneWorkouts,deleteOneWorkouts
}
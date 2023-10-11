const  express = require('express');
const router = express.Router();
const  workoutControlller = require('../../controllers/workoutController')



router
  .get('/', workoutControlller.getAllWorkouts)
  .get("/:workoutId", workoutControlller.getOneWorkouts)
  .post("/", workoutControlller.createNewWorkouts)
  .patch("/:workoutId", workoutControlller.updateOneWorkouts)
  .delete("/:workoutId", workoutControlller.deleteOneWorkouts);


module.exports = router
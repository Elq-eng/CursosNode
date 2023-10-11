const express = require('express');
const v1Router = require("./v1/routes/workoutRoutes")


const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use("/app/v1/workouts",v1Router);





app.listen(PORT, () => { console.log("(ง🔥ﾛ🔥)ง , server listening on port " + PORT) });



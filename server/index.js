console.log("app is loading");
const express = require("express");
const app = express();

// used for json inside body 
app.use(express.json());

 app.get("/api", (req, res) => {
   console.log("root is accessed");
   res.send({res:"result from server"});
 });

//Slide 3- register to the simulations

 app.post("/api/users/register", (req, res) => {
   console.log(" users register is accessed");
   res.sendStatus(201);
 });

//Slide 13 -- Allows the other players to join the game (with the UUID)

 app.get("/api/simulations/join", (req, res) => {
   console.log("simulation login is accessed");
   res.sendStatus(200);
 });

//Slide 10-- simulation library only for the manager

 app.get("/api/simulation", (req, res) => {
   console.log("simulation list is accessed");
   res.send(
     [{
    simulationName:"simulationName",
    simulationDescription:"simulationDescription",
    simulationTime:"simulationTime"
      },
  {
    simulationName:"1simulationName",
    simulationDescription:"1simulationDescription",
    simulationTime:"1simulationTime"
  },]);
  });

//Slide 11-- When the manager selects the simulation

  app.post("/api/simulationInstance", (req, res) => {
    console.log("simulationInstance - Created UUID");
    res.sendStatus(201);
  });

//Slide 11 Details of the selected simulation

  app.get("/api/simulation/:id", (req, res) => {
    console.log("simulation- get simulation simulation by id");
    res.send({
      simulationName:"simulationName1",
      simulationDescription:"simulationDescription1",
      simulationTime:"simulationTime1"
  
    });
  });

//Slide 12-- UpdateRole for simulation

  app.put("/api/simulation/:id/UpdateUser", (req, res) => {
    console.log("simulation Update Role");
    res.send({
      user1:"user1",
      user2:"user2",
    });
  });

//Slide 16-- Start simulation

  app.put("/api/simulation/:id/Start", (req, res) => {
    console.log("simulationStart is accessed");
    res.sendStatus(200);
  });

//Slide 18 - NextLevel

 app.put("/api/simulation/:id/NextLevel", (req, res) => {
    console.log("simulation Next Level is accessed");
    res.sendStatus(200);
  });

//Slide 18 18--Stop

  app.put("/api/simulation/:id/Stop", (req, res) => {
    console.log("simulation Stop is accessed");
    res.sendStatus(200);
  });



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

console.log("app is loading");
const express = require("express");
const app = express();

// used for json inside body 
app.use(express.json());

 app.get("/api", (req, res) => {
   console.log("root is accessed");
   res.send({res:"result from  server"});
 });

//Slide 3- register to  the system

 app.post("/api/users/register", (req, res) => {
   console.log(" users register to the -  system");
   res.sendStatus(201);
 });

//Slide 10-- simulation library only for the manager

 app.get("/api/simulation", (req, res) => {
   console.log("simulation list is accessed");
   res.send(
    [{
     id:1,
     simulationName:"simulationName",
     simulationDescription:"simulationDescription",
     simulationTime:"simulationTime",
     numberOfParticipants:"numberOfParticipants",
    },
    {
     id:2,
     simulationName:"1simulationName",
     simulationDescription:"1simulationDescription",
     simulationTime:"1simulationTime",
     numberOfParticipants:"1numberOfParticipants"
    }]);
  });

//Slide 11-- When the manager selects the simulation
// --- All info app.get would return, so that the client can use it to render the next screen.

  app.get("/api/simulation/:id/createNew", (req, res) => {
    console.log("simulationInstance - Created UUID");
    res.send({res:"UUID"});
  });

//Slide 11 Details of the selected simulation

  app.get("/api/simulation/:id", (req, res) => {
    console.log("simulation- get simulation simulation by id");
    res.send({
      id:1,
      simulationName:"simulationName",
      simulationDescription:"simulationDescription",
      simulationTime:"simulationTime",
      numberOfParticipants:"numberOfParticipants"
    });
  });

//Slide 12-- UpdateRole for simulation - role to user

  app.put("/api/simulation/:id/UUID/UpdateUser", (req, res) =>{
    console.log("simulation Update Role");
    res.send({
      Role: "description of this role",
    });
  });
   
  //--I added the role name in URL So we can change the sim description by role

  app.get("/api/simulation/:id/UUID/RoleAssignment", (req, res) => {
    console.log("RoleAssignment");
    res.send({
      Role1:"user1",
      Role2:"user2",
      Role3:"user3",
    });
  });

  //Slide 13 -- Allows the other players to join the game (with the UUID)

  app.get("/api/simulations/:id/join", (req, res) => {
   console.log("simulation login is accessed");
    res.sendStatus({
      simulationName:"simulationName",
      simulationDescription:"simulationDescription",
      simulationTime:"simulationTime",
      numberOfParticipants:"numberOfParticipants",
      roleAssignemnt: { Role1:"user1", Role2:"user2", Role3:"user3"}
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

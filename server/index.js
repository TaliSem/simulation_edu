console.log("app is loading");
const express = require("express");
const app = express();

// used for json inside body 
app.use(express.json());

app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({res:"result from server"});
});

//Screen 2
app.post("/users/register", (req, res) => {
  console.log(" users register is accessed");
  res.sendStatus(201);
});

//Screen 3
app.get("/simulations/join", (req, res) => {
  console.log("simulation login is accessed");
  res.sendStatus(200);
});

//Screen 4
app.get("/simulation", (req, res) => {
  console.log("simulation list is accessed");
  res.send({
  simulationName:"simulationName",
  simulationDescription:"simulationDescription1",
  simulationTime:"simulationTime10"

});
});

app.post("/simulationInstance", (req, res) => {
  console.log("simulationInstance - Created UUID");
  res.sendStatus(201);
});

//Screen 5
app.get("/simulation/:id", (req, res) => {
  console.log("simulation- get simulation simulation by id");
  res.send({
    simulationName:"simulationName1",
    simulationDescription:"simulationDescription1",
    simulationTime:"simulationTime1"
  
  });
});

app.put("/simulationUpdateRole", (req, res) => {
  console.log("simulation Update Role");
  res.send({
    Role1:"Role1",
    Role2:"Role2",
  });
});

app.put("/simulationStart", (req, res) => {
  console.log("simulationStart is accessed");
  res.sendStatus(200);
});

//Screen 7
app.put("/simulationNextLevel", (req, res) => {
  console.log("simulation Next Level is accessed");
  res.sendStatus(200);
});

app.put("/simulationStop", (req, res) => {
  console.log("simulation Stop is accessed");
  res.sendStatus(200);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const url = "mongodb://localhost:27017/";
const my_db = "edusim";
const CategoriesName = "simulation";
const ObjectId= require("mongodb").ObjectID;
const { v4: uuidv4 } = require('uuid');

function createNew(req, res) {
    console.log(req.params.id);
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);;
    }
    
    let dbo = db.db(my_db);
    let UUID = uuidv4();

   dbo.collection(CategoriesName).findOne({ _id: new ObjectId(req.params.id)} ,function(err,IDFound ) {
        if (err){
          console.log(err);
          return res.sendStatus(500);
          }
          if(!IDFound){
            console.log('ID not found')
            return res.sendStatus(404);
          }
      
   const simulationInstance ={
        simulationID: new ObjectId(req.params.id),
        Instance : UUID,
        name : IDFound.name,
        description : IDFound.description,
        time : IDFound.time,
        QuantityOfParticipants:IDFound.participants
      }
console.log(simulationInstance)

  const update = { $push: {SimulationInstance:{
        simulationID: new ObjectId(req.params.id),
        Instance : UUID,
        name : IDFound.name,
        description : IDFound.description,
        time : IDFound.time, 
        QuantityOfParticipants:IDFound.participants.length,
        }} };
        const filter = {SimulationInstance:{Instance : UUID} };
        console.log(filter)

// I tried to do validation to Instance but without success

        dbo.collection(CategoriesName).find(filter ,function(err, uuidFound ) {
        console.log(filter)
          if (err){
            console.log(err);
            return res.sendStatus(500);
            }
            if(!uuidFound){
              console.log(filter )
              return  res.status(404).send(filter);
            }

    dbo.collection(CategoriesName).findOneAndUpdate({_id: new ObjectId(req.params.id)},update,function(err,Found ) {  
   if (err) {
        return res.sendStatus(500);
       }   
      else{
        console.log(update)
        res.status(201).send(update);
    
      }  
    })       
      });
     });
  });
}

function handleGet(req, res) {
  console.log(req.params.id);
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  
    let dbo = db.db(my_db);

    dbo.collection(CategoriesName).findOne({ _id: new ObjectId(req.params.id)} ,function(err,IDFound ) {
    let simulationInstance = {
      _id: new ObjectId(req.params.id),
        name : IDFound.name,
        description : IDFound.description,
        time : IDFound.time,
        QuantityOfParticipants:IDFound.participants,}
      console.log(simulationInstance)

      if (err) {
        return res.sendStatus(500);
       }
       if (IDFound) {
        console.log(IDFound);
        res.status(200).json(simulationInstance);
      }
       else  {
        console.log( `id don't found`);
        return res.sendStatus(404);
      }
     });
   });
 }

module.exports.createNew = createNew;
module.exports.handleGet = handleGet;
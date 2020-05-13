const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const url = "mongodb://localhost:27017/";
const my_db = "edusim";
const CategoriesName = "simulation";
const ObjectId= require("mongodb").ObjectID;

function createNew(req, res) {
    console.log('createNew UUID is accessed');
    console.log(req.params.id);
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);;
    }
    
    let dbo = db.db(my_db);
    
    const UUID = Math.floor(Math.random() * 10000) + 500000;
    console.log(UUID)
    
    dbo.collection(CategoriesName).findOne({ _id: new ObjectId(req.params.id)} ,function(err,IDFound ) {
    
      if (err) {
        return res.sendStatus(500);
       }
       if (!IDFound) {
        return res.sendStatus(404);
      }

      const simulation ={
        simulationID: new ObjectId(req.params.id),
         UUID : UUID,
        name : IDFound.name,
        description : IDFound.description,
        time : IDFound.time,
        QuantityOfParticipants:IDFound.participants.length,
      }
      console.log(simulation);

      //---- I created new Collections 'StartedGame'
     
          dbo.collection('StartedGame').insertOne(simulation, function(err, result) {
            if (err){
              console.log(err);
              return res.sendStatus(500);
              }
                else{
                  res.status(201).send(simulation);
                  console.log(simulation);
                }
      
     });
    });
  });
}

function handleGet(req, res) {
  console.log(req.params.id);
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);;
    }
  
    let dbo = db.db(my_db);

    dbo.collection(CategoriesName).findOne({ _id: new ObjectId(req.params.id)} ,function(err,IDFound ) {
    let simulation = {
      _id: new ObjectId(req.params.id),
        name : IDFound.name,
        description : IDFound.description,
        time : IDFound.time,
        QuantityOfParticipants:IDFound.participants.length,
    }
      console.log(simulation)

      if (err) {
        return res.sendStatus(500);
       }
       if (IDFound) {
        console.log(IDFound);
        res.status(200).json(simulation);
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
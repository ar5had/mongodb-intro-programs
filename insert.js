var url = "mongodb://localhost:27017/learnyoumongo";

var jsonDoc = {firstName: process.argv[2], lastName: process.argv[3]};

var mongo = require("mongodb").MongoClient;

mongo.connect(url, function(err, db){
   if(err)
        throw err;
    var collection = db.collection('docs');
    collection.insert(jsonDoc, function(err, data){
        if(err)
            throw err;
        console.log(JSON.stringify(jsonDoc));
        db.close();
    });
});
var url = "mongodb://localhost:27017/learnyoumongo";

var mongo = require("mongodb").MongoClient;

mongo.connect(url, function(err, db){
    
    if(err) 
        throw err;
    
    db.collection('parrots').find({
        age : {
            $gt : parseInt(process.argv[2]) 
        }
    }).toArray(function(err, data){
        
        if(err) 
            throw err;
        else
            console.log(data);
        
        db.close();
    });

});

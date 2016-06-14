var url = "mongodb://localhost:27017/learnyoumongo";

var mongo = require("mongodb").MongoClient;

var total;

mongo.connect(url, function(err, db){
    
    if(err) 
        throw err;
    
    var collection = db.collection('prices');
    
    collection.count({
        size : process.argv[2]
    }, function(err, count){
        
        if(err) 
            throw err;
        else
            total = count;
       
    });
    collection.aggregate([
    { $match: { size : process.argv[2] }},
    { $group: {
        _id : 'total'
    , total: {
        $sum: '$price'
    }
    }}
    ]).toArray(function(err, result){
        if(err)
            throw err;
        console.log((result[0].total/total).toFixed(2))
        db.close();
    });
});

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server.');

    db.collection('Todos').findOneAndUpdate(
        {_id: new ObjectID('58adcc11b950587c839a6a8e')
    }, {
        $set: {
            completed: true
        }   
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});
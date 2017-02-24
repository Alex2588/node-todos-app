const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if(err){
    //         console.log('Unable to insert todo', err);
    //         return;
    //     }

    //     console.log(JSON.stringify(res.ops, null, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Alex',
        age: 28,
        location: 'Kharkiv, Ukraine'
    }, (err, res) => {
        if(err){
            console.log('Unable to insert user', err);
            return;
        }

        console.log(JSON.stringify(res.ops, null, 2));
    });

    db.close();
});
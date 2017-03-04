const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// var id = '58b961679dd9076c1674fff4';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }

//     console.log('Todo by id:', todo);
// }).catch((e) => console.log(e));

var userId = '58b0380587338b58082fef6d';

User.findById(userId).then((user) => {
    if(!user){
        return console.log('User not found');
    };

    console.log('User by id:', user);
}).catch(e => console.log(e));
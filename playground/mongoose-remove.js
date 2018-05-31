const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// 
// Todo.remove({}).then((result) => {
// 	console.log(result);
// })

Todo.findByIdAndRemove('5b101a41d2726ce5deaf5c0e').then((todo) => {
	console.log(todo);
})

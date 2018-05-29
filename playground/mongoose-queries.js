const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '6b0d89812b94521bdf06434';
//
// if (!ObjectID.isValid(id)) {
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });
//
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('TodoById', todo);
// }).catch((e) => {
// 	console.log(e);
// });

var id = '5b0c53c9bde51d0fb844a63c';

User.findById(id).then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 4));
}).catch((e) => console.log(e.message));

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApps');
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert todo', error);
	// 	}
	//
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'StrngLuv',
	// 	age: 25,
	// 	location: 'Beijing'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user', err);
	// 	}
	//
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	client.close();
});

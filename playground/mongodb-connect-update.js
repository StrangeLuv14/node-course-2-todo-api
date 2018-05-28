// const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApps');

// 	db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b0c3c86563ed8430e898ee9')},
// 	{ $set: { completed: true } },
// 	{ returnOriginal: false })
// 	.then((result) => {
// 	console.log(result);
// });

	db.collection('Users').findOneAndUpdate(
		{ name: 'Jane' },
		{ $set: { name: 'Shannon' },
		  $inc: { age: 1 }},
		{ returnOriginal: false }
	).then((result) => {
		console.log(result);
	})

	//client.close();
});

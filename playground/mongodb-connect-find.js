// const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	const db = client.db('TodoApps');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5b0c2c43563ed8430e898edf')
	// }).toArray((err, docs) => {
	// 	assert.equal(err, null);
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log('Todos');
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({name : "StrngLuv"}).toArray((err, docs) => {
		assert.equal(err, null);
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));

	});

	//client.close();
});

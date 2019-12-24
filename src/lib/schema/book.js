const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

let schema = mongoose.Schema({
	title: String,
	author: String,
	roomId: ObjectId,

	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: Date,
	createdBy: ObjectId,
	updatedBy: ObjectId
});
console.log(123);
console.log(mongoose.model('book', schema));
module.exports = mongoose.model('book', schema);
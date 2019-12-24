const mongoose = require('mongoose');
const {
	DB_URL
} = require('config')
mongoose.Promise = global.Promise; // Use native promises

module.exports = {
	connect,
	ObjectId: mongoose.Types.ObjectId
};

async function connect() {
	try {
		let ret = await mongoose.connect(DB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		})
		console.log(DB_URL);
		console.log(111111);
	} catch (e) {
		console.log('connect error');
		console.log(DB_URL);
		console.log(e);
	}
}
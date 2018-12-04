const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/roomstest');
// let db = mongoose.connection;
// db.on('error', (err) => {
//   console.log('error connecting', err);
// });
// db.once('open', () => {
//   console.log('mongoose connected');
// });

// mongoose.set('debug', true);

let roomSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  user: {type: String, required: true},
  title: {type: String, required: true},
  type: {type: String, required: true},
  city: {type: String, required: true},
  selfCheckin: Boolean,
  superhost: Boolean,
  descriptions: {type: Array, required: true},
  amenities: Array,
  sleepingArrangements: {type: Array, required: true}
});

const RoomModel = mongoose.model('Room', roomSchema);

const findAll = (callback) => {
  RoomModel.find({}, callback);
};

const findByID = (id, callback) => {
  RoomModel.find({id: id}, callback);
};

const insertOne = (room, callback) => {
  RoomModel.create(room, callback);
};

module.exports = {
  findAll,
  findByID,
  insertOne
};
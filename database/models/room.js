const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rooms');

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
  rooms: {type: Array, required: true}
});

const RoomModel = mongoose.model('Room', roomSchema);

const findAll = (callback) => {
  RoomModel.find({}, callback);
};

const findByID = (id, callback) => {
  console.log('were in find by id and this is id', id);
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
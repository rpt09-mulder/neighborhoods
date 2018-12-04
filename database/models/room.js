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
  sleepingArrangements: {type: Array, required: true}
});

const RoomModel = mongoose.model('Room', roomSchema);

const findAll = (callback) => {
  RoomModel.find({}, () => {
    callback;
    mongoose.disconnect();
  });
};

const findByID = (id, callback) => {
  RoomModel.find({id: id}, () => {
    callback;
    mongoose.disconnect();
  });
};

const insertOne = (room, callback) => {
  RoomModel.create(room, () => {
    callback;
    mongoose.disconnect();
  });
};

module.exports = {
  findAll,
  findByID,
  insertOne
};
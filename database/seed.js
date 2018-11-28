const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/rooms');

let roomSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  user: String,
  title: String,
  type: String,
  city: String,
  selfCheckin: Boolean,
  superhost: Boolean,
  descriptions: Array,
  amenities: Array,
  rooms: Array
});

for (let i = 1; i < 101; i++) {

}
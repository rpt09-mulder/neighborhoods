const express = require('express');
const bodyParser = require('body-parser');
const Room = require('../database/models/room.js');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/rooms/:id', (req, res) => {
  console.log('you hit this endpoint');
  // res.send('hi');
  Room.findByID(req.params.id, (err, roomInfo) => {
    console.log('err', req.params.id, err);
    console.log('roomInfobefore', roomInfo);
    if (err) {
      console.log('there was an error', err);
      res.status(404).send(`ID ${req.params.id} does not exist in database`);
    } else {
      console.log('roomInfo', roomInfo);
      res.json({data: roomInfo});
    }
  });
});

module.exports = app;
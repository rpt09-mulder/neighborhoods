const express = require('express');
const bodyParser = require('body-parser');
const Room = require('../database/models/room.js');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/rooms/:id', (req, res) => {
  console.log('you got id', req.params.id);
  Room.findByID(req.params.id, (err, roomInfo) => {
    console.log('roomInfo', roomInfo);
    console.log('error', err);
    if (err) {
      res.status(404).send(`ID ${req.params.id} does not exist in database`);
    } else {
      res.json(roomInfo);
    }
  });
});

let port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

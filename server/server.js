const app = require('./app.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rooms');

let port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
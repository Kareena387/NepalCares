const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/description', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => console.error('MongoDB connection error:', err));
db.once('open', async () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;

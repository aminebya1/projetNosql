// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/users.route');
const eventRoutes = require('./routes/events');
const groupRoutes = require('./routes/groups.route');
const discussionRoutes = require('./routes/discussions');
const albumRoutes = require('./routes/photoAlbums');


const mongoURI = 'mongodb+srv://cicnaq:pwd1234@cluster0.igsr4uu.mongodb.net/Facebook_API'


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Define your Mongoose schema and models here, if needed

  // Start your Express app after establishing the MongoDB connection
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/groups', groupRoutes);
app.use('/api/v1/discussions', discussionRoutes);
app.use('/api/v1/photoAlbums', albumRoutes);
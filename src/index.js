// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/users.route');
const eventRoutes = require('./routes/events.route');
const groupRoutes = require('./routes/groups.route');
const discussionRoutes = require('./routes/discussions.route');
const albumRoutes = require('./routes/album.route');
const photoRoutes = require('./routes/photo.route');
const sondageRoutes = require('./routes/sondage.route');
const ticketRoutes = require('./routes/ticket.route');

const mongoURI = `mongodb+srv://borina:OTw9gqxq8HO7rhAz@cluster0.of3u3g0.mongodb.net/api_facebook`
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
app.use(express.json());
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
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
app.use('/api/v1/groups', groupRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/discussions', discussionRoutes);
app.use('/api/v1/albums', albumRoutes);
app.use('/api/v1/photos', photoRoutes);
app.use('/api/v1/sondages', sondageRoutes);
app.use('/api/v1/tickets', ticketRoutes);

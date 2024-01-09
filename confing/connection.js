const mongoose = require('mongoose');

// Use a default MongoDB URI if the environment variable is not set
const defaultMongoURI = 'mongodb://localhost:27017/FernandoAndFriends';
const mongoURI = process.env.MONGODB_URI || defaultMongoURI;

// Set up the mongoose connection with the required options
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Store the connection in a variable for reuse or further configuration
const dbConnection = mongoose.connection;

// Handle connection events (optional, you can add more event handlers as needed)
dbConnection.on('connected', () => {
  console.log(`Connected to MongoDB at ${mongoURI}`);
});

dbConnection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

dbConnection.on('disconnected', () => {
  console.log('MongoDB connection disconnected');
});

// Export the mongoose connection for use in other parts of the application
module.exports = dbConnection;

const { Schema, model } = require('mongoose');

// Defining the User schema with the required fields and their respective data types
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // Using regular expression to validate email format
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
        },
        message: 'Invalid email format',
      },
    },

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // Enables virtual properties to be displayed when a user document is transformed into JSON format
    },
    id: false, // Disables the default '_id' field in the User model to be returned when calling toJSON() method
  }
);

// Defining a virtual property 'friendCount' which returns the number of friends in the friends array
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Creating the User model from the userSchema
const User = model('User', userSchema);

// Exporting the User model as a module
module.exports = User;

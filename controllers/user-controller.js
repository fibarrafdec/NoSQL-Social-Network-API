const { User } = require('../models');

const UserController = {
  // 1. Get all users
  getAllUsers(req, res) {
    User.find({})
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: 'Internal server error' }));
  },

  // 2. Get one user by ID
  getUserById(req, res) {
    User.findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      })
      .catch(err => res.status(500).json({ error: 'Internal server error' }));
  },
  
  // 3. Create a user
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.status(201).json(user))
      .catch(err => res.status(500).json({ error: 'Internal server error' }));
  },

  // 4. Update user by ID
  updateUserById(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      })
      .catch(err => res.status(500).json({ error: 'Internal server error' }));
  },

  // 5. Delete user
  deleteUserById(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
      })
      .catch(err => res.status(500).json({ error: 'Internal server error' }));
  },

  // 6. Add friend to user's friend list
  addFriend(req, res) {
    const { userId } = req.params;
    const { friendId } = req.body;

    User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { friends: friendId } },
      { new: true }
    )
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      })
      .catch(err => res.status(500).json({ error: 'Internal server error' }));
  },

  // 7. Remove friend from user's friend list
  removeFriend(req, res) {
    const { userId, friendId } = req.params;

    User.findOneAndUpdate(
      { _id: userId },
      { $pull: { friends: friendId } },
      { new: true }
    )
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        const friendRemoved = !user.friends.includes(friendId);

        if (friendRemoved) {
          res.json({ message: 'Friend removed successfully!', user });
        } else {
          res.json(user);
        }
      })
      .catch(err => res.status(500).json({ error: 'Internal server error' }));
  },
};

// Export UserController
module.exports = UserController;

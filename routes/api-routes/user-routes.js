const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// Routes for GET and POST all users
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// Routes for GET user by ID, PUT update user by ID, and DELETE user by ID
router.route('/:userId')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

// Routes for POST add friend and DELETE remove friend
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

// Export the router
module.exports = router;

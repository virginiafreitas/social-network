const router = require('express').Router();

const {
  getUsers, //tested ok
  getSingleUser, //tested ok
  createUser, //tested ok
  createFriend, //tested ok
  updateUser, //tested ok
  deleteUser, //tested ok
  deleteFriend, //tested ok
  // getFriendsList,
} = require('../../controllers/userController.js');

  //     /api/users    
router
  .route('/')
  .post(createUser)
  .get(getUsers);

//     /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser) 
  .put(updateUser)    
  .delete(deleteUser);

//   /api/users/userID/friends/friendID
router
  .route('/:userId/friends/:friendId')
  .post(createFriend) // select "no body" in insomnia
  .delete(deleteFriend);

module.exports = router;

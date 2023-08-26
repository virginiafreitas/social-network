const router = require('express').Router();

const {
  getThoughts, //tested ok
  getSingleThought, //tested ok
  getReactions, //tested ok
  createThought, //tested ok
  createReaction, //tested ok
  updateThought, //tested ok
  deleteThought, //tested ok
  deleteReaction, //tested ok, use reactionID and not _id
} = require('../../controllers/thoughtController.js');

//    /api/thoughts/
router
  .route('/')
  .post(createThought)
  .get(getThoughts);

//     /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//   /api/thoughts/thoughtID/reactions
router
  .route('/:thoughtId/reaction')
  .get(getReactions)
  .post(createReaction);
  
  
  router
  .route('/:thoughtId/reaction/:reactionId')
  .delete(deleteReaction);
  

module.exports = router;

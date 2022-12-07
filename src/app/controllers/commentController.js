const Comment = require('../models/Comment');

const commentController = {
  // CREATE COMMENT
  createComment: async (req, res) => {
    const newComment = new Comment(req.body);
    try {
      const savedComment = await newComment.save();
      res.status(200).json(savedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET USER COMMENT
  getComment: async (req, res) => {
    try {
      const comments = await Comment.find({ productId: req.params.productId });
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET ALL
  getAllComment: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // UPDATE COMMENT
  updateComment: async (req, res) => {
    try {
      const updatedComment = await Comment.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE COMMENT
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json('Comment has been deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = commentController;

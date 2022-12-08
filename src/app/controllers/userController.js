const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
  // GET ALL USERS
  getAllUser: async (req, res) => {
    const query = req.query.new;
    try {
      const user = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET USER
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // UPDATE USER
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  changePassword: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!user) {
        res.status(404).json('Wrong username');
      } else if (!validPassword) {
        res.status(404).json('Wrong password');
      } else if (user && validPassword) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.passwordUpdate, salt);
        user.password = hashed;
        await user.save();
        await res.status(200).json('Success updated password');
      }
    } catch (err) {
      console.log('err', err);
      res.status(500).json(err);
    }
  },

  // DELETE USER
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;

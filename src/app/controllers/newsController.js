const News = require('../models/News');

const newsController = {
  // CREATE NEWS
  createNews: async (req, res) => {
    const news = new News(req.body);
    try {
      const savedNews = await news.save();
      res.status(200).json(savedNews);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET ALL NEWS
  getAllNews: async (req, res) => {
    try {
      const news = await News.find();
      res.status(200).json(news);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = newsController;

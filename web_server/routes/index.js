const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

const homepageController = (req, res) => {
  res.render('index', {title: 'Express'});
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

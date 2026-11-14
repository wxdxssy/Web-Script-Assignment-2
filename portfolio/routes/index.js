let express = require('express');
let router = express.Router();

// get home page and pass its title to the EJS view.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// get the About Me page.
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

// get the Projects page.
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

// get the Contact Me page.
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
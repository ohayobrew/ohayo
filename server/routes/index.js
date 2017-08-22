var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/mtest');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  title: {type: String, required: true},
  conten: String,
  author: String
}, {collection: 'user-data'});

var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', (req, res, next) => {
  UserData.find()
    .then((doc) => { console.log("hello" +doc);
      res.render('index', { items: doc });
    });  
});
router.post('/insert', (req, res, next) => {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
  var data = new UserData(item);
  data.save();
  res.redirect('/');
});
router.post('/update', (req, res, next) => {
  var id = req.body.id;
  UserData.findById(id, (err, doc) => {
    if(err) {
      console.error('Error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.save();    
  });
  res.redirect('/');
});
router.post('/delete', (req, res, next) => {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/');
})

module.exports = router;

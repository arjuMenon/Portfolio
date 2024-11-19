var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=>{
  res.render('index')
})
router.get('/contact',(req,res)=>{
  res.render('contact')
})
router.get('/works',(req,res)=>{
  res.render('works')
})
module.exports = router;

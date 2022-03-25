const express = require('express');
const app = express();
const router=express.Router();
const listNFTController=require('../controller/listNFTController');



router.post('/listNFTs', listNFTController.listNFTController);
app.use((req,res,next) => {
  console.log('Time', Date.now());
  next();
});


  

  module.exports = router;
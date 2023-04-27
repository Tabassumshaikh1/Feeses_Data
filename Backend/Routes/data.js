const express = require('express');
const router = express.Router();
const data = require("../Controller/data")
router.post('/senddata',data.storeData)
router.get('/getlist',data.getlist)
router.post('/getlistbyid',data.getlistbyid)
router.post('/updatedata',data.updatedata)
module.exports=router
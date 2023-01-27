const express=require('express');
const router=express.Router();
const controller=require('../Controller/controller')


router.get('/get', controller.get)
router.post('/post',controller.post)
router.delete('/delete',controller.delete)

router.patch('/patch',controller.patch)
router.get('/get/:id',controller.get)

module.exports=router

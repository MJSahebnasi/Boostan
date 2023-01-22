const express = require('express')
const router = express.Router();

const course = require('../model/course')

router.get('/:std_id' ,async(req,res)=>{
    try {
        let std_id = req.params.std_id;
        const courses = await course.find({registerars: std_id}).exec();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({message:'Interval server error'})
    }
})


module.exports=router;
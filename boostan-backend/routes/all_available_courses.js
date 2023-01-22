const express = require('express')
const router = express.Router();

const course = require('../model/course')

router.get('/' ,async(req,res)=>{
    try {
        const courses = await course.find({}).exec();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({message:'Interval server error'})
    }
})


module.exports=router;
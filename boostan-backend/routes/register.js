const express = require('express')
const router = express.Router();

const course = require('../model/course')

router.post('/' ,async(req,res)=>{
    try {
        let crs_code = req.body.course_code;
        let std_id = req.body.std_id;
        
        const crs = await course.findOne({code: crs_code}).exec();

        if (crs.registerars && crs.registerars.includes(std_id))
            res.status(403).json(false);
        else{
            if (!crs.registerars){
                crs.registerars = [];
            } 
            crs.registerars.push(std_id)
            crs.registered = crs.registered + 1;

            await crs.save();

            res.status(200).json(true);
        }
    } catch (error) {
        res.status(500).json({message:'Interval server error'})
    }
})


module.exports=router;
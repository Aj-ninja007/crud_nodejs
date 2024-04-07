const express = require('express');
const router =express.Router();

const person=require('./../models/person');


//add new people
router.post('/', async(req,res)=>{
    
    try{
        const data=req.body
    
        const newPerson =new person(req.body);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(200).json({error:'internal server error'});
    }
    })

    router.get('/', async (req,res)=>{
        try{
            const data=await person.find();
            console.log('data fetch');
            res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.status(200).json({error:'internal server error'});
        }
    })


    //get workType
router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=='chef'||workType=='manager'||workType=='waiter'){
           const response=await person.find({work:workType});
           res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(200).json({error:'internal server error'});
    }
})

// router.put('/:id', async(res,req)=>{
//     try{
//         const personId=req.params.id;
//         const updatePersonData =req.body; //updated data for the person
//         const response =await person.findByIdAndUpdate(personId,updatePersonData, {
//             new:true,
//             runValidators:true,
//         });
//         if(!response){
//             res.status(404).json({error:'Person not find'});
//         }
//         console.log("data updated");
//         res.status(200).json(response);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error:'internal server error'});
//     }
// })
router.delete('/:id',async(res,req)=>{
    try{
        const personId=req.params.id;
        const response=await person.findByIdAndRemove(personId);

        if(!response){
                         res.status(404).json({error:'Person not find'});
                 }
                 console.log("data updated");
                res.status(200).json({message:'person deleted'});
    }
    catch(err){
               console.log(err);
               res.status(500).json({error:'internal server error'});
          }
})
module.exports=router;
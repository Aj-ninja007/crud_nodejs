const express = require('express');

const app = express()

const db=require('./db');

const bodyParser =require('body-parser');

app.use(bodyParser.json());



const regis=require('./models/registration');





app.listen(4000,()=>{
    console.log("server is running in 4000");
});

app.get('/',(req,res)=>{
    console.log("hello");
   res.send("hello node api");
});
//POST route to add a person data
// app.post('/person', async(req,res)=>{
    
// try{
//     const data=req.body

//     const newPerson =new person(req.body);
//     const response = await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);
// }
// catch(err){
//     console.log(err);
//     res.status(200).json({error:'internal server error'});
// }
// })

// get
// app.get('/person', async (req,res)=>{
//     try{
//         const data=await person.find();
//         console.log('data fetch');
//         res.status(200).json(data);
//     }catch(err){
//         console.log(err);
//         res.status(200).json({error:'internal server error'});
//     }
// })
//get
// app.get('/person/:worktype',async(req,res)=>{
//     try{
//         const worktype=req.params.worktype;
//         if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){
//            const response=await person.find({work:worktype});
//            res.status(200).json(response);
//         }else{
//             res.status(404).json({error:'Invalid work type'});
//         }
//     }catch(err){
//         console.log(err);
//         res.status(200).json({error:'internal server error'});
//     }
// })


//registration for post

app.post('/regis', async(req,res)=>{
     try{
        const data=req.body
    const newRegis =new regis(req.body);
    const response = await newRegis.save();
    console.log('data saved');
    res.status(200).json(response);
     }
     catch(err){
    console.log(err);
    res.status(200).json({error:'internal server error'});

     }
})

const personRotes =require('./routes/personroutes');
app.use('/person',personRotes);
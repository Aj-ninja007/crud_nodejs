const mongoose=require('mongoose');

//define the person schema

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
     },
    //  ,
//     age:{
//         type:Number,
//         // required:true
//     },
   work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
//    mobile:{
//         type:Number,
//         // required:true
//     },
//    work:{
//         type:String,
//         unique:true,
//         // required:true
//     },
//     address:{
//         type:String
//     },
//     salary:{
//         type:Number,
       
//     }
});

const person = mongoose.model('person',personSchema);

module.exports=person;
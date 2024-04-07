const mongoose =require('mongoose');
const mongoUrl="mongodb://localhost:27017/hotels"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//get the default connection
const db=mongoose.connection;


db.on('connected',()=>{
    console.log('connected to mongoDB server');
})
db.on('error',(err)=>{
    console.log('error',err);
})
db.on('disconnected',()=>{
    console.log('mongodb disconnect');
})

module.exports=db;
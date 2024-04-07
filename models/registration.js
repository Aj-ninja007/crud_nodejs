const mongoose=require('mongoose');


const regisSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        // validate: [validator.isEmail, 'Invalid email'],
      },
      password:{
        type: String
      }
});

const regis = mongoose.model('regis',regisSchema);

module.exports=regis;

var mongoose = require('mongoose');
const config=require('config');


const db=config.get('mongoURL');

const connectDB=async ()=>{
    try {
        await mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true,useCreateIndex: true });
    } catch (err) {
      console.log(err.message);
      //exit process with failure
      process.exit(1);  
    } 
}

module.exports=connectDB;

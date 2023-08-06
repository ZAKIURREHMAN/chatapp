const mongoose = require("mongoose")
const URL ="mongodb+srv://zaki:11223344@cluster0.bqtefmi.mongodb.net/expariment?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
const connecttomongo = ()=>{
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(req,res)=>{
        console.log("Mongose connect successfully")
    })
}
module.exports = connecttomongo;
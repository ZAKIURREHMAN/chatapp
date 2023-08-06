const db = require('./db');
db()
const express = require('express')
const User = require("./users/User")
const app = express()
const port = 4000
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use('/register',require('./model/auth'))
app.use('/getdata',async(req,res)=>{
try{
  const alluser =await User.find({});
res.send({status:"ok",data:alluser})
}
catch(error){
  console.log(error)
}
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
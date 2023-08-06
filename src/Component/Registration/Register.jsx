import React,{useState} from 'react'
import axios from 'axios'

function Register() {
    const [user,setuser] = useState("")
    const changeHandler = (e)=>{
        const {name,value} = e.target
        setuser({
            ...user,
            [name]:value,
        })
    }
    const regiser = ()=>{
        const{name,email,password} = user;
        if(name&&email&&password){
            axios.post("http://localhost:4000/register",user)
            .then(res=>console.log(res))
        }
    }
  return (
   <>
     <div class="registration-form"style={{textAlign:'center'}}>
    <h2>Registration Form</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" value={user.name} onChange={changeHandler}  style={{margin:'10px 0px'}}/> <br />
      
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" value={user.emil} onChange={changeHandler}  style={{margin:'10px 0px'}}/><br />
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" value={user.password} onChange={changeHandler}  style={{margin:'10px 0px'}}/><br />
      
      <button type="submit" onClick={regiser} >Register</button><br />  or <br />
      <button type="submit">Login</button>
    </form>
  </div>
   </>
  )
}

export default Register








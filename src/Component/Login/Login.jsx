import React,{useState} from 'react'

function Login() {
    const [user,setuser]=useState("")
    const changeHandler = (e)=>{
        const{name,value} = e.target
        setuser({
            ...user,
            [name]:value
        })
    }
  return (
     <>
         <form >

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" value={user.email}  onChange={changeHandler} required style={{margin:'10px 0px'}}/><br />
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" value={user.password} onChange={changeHandler} required style={{margin:'10px 0px'}}/><br />
      
      <button type="submit">Login</button> <br /> or <br />
      <button type="submit">Register</button>
    </form>
     </>
  )
}

export default Login
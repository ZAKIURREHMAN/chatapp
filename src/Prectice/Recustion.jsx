import React, { useState } from 'react'
function Recustion() {
    const [name,setname] = useState()
    const [errorname,seterrorname] = useState(false)
    const [email,setemail] = useState();
    const [erroremail,seterrorEmail] = useState(false)
    const emailregx =   /^[a-zA-Z0-9.!$%^&*]+@[a-zA-Z0-9]+[a-zA-Z0-9]+[a-zA-Z0-9].[c]+[a-zA-Z0-9]/;
    const changehandler = (e)=>{
        const name = e.target.value;
        console.log(name)
        if(name.length < 4){
            seterrorname(true)
        }
        else{
            seterrorname(false)
        }
        setname(name)
    }
    const changehandelEmail = (e)=>{
        const email = e.target.value;
        if(!email.match(emailregx)){
            seterrorEmail(true)
        }
        else{
            seterrorEmail(false)
        }
        setemail(email)
    }
    const handelsubmit = (e)=>{
        const handelname = seterrorname(false);
        if(handelname === false){
            console.log("some  working")
        }
    }
  return (
    <>
    <form   >
        <div className="container-main" style={{color:'red',top:'50px',position:'relative',textAlign:'center',}} >
            <span>Name</span>
            <input type="text" placeholder='Enter Your Name' name='name' value={name}  onChange={changehandler} /> <br />
            {errorname ? <span>Your Name Must be 3 character</span> :""}
            <br />
            <span>Email</span>
            <input type="text" placeholder='Enter Your Name' name='name' value={email} onChange={changehandelEmail} /> <br />
            {erroremail ? <span>Enter Your Valid Email</span> :""}
            <br /><br /> <br /><br />
            <input type="button" value="Submit"onClick={handelsubmit}/>
        </div>
    </form>
    </>
  )
}
export default Recustion
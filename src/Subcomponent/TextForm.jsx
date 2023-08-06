import React from 'react'
import { useState } from 'react'
function TextForm(props) {
    const [text ,settext] = useState("")
    const handlechange = (e)=>{
        settext(e.target.value)
    }
    const upercaseHandler =()=>{
        let newcase=text.toUpperCase()
        settext(newcase)
    }
    const lowerCasehandler=()=>{
        let lowercase = text.toLowerCase()
        settext(lowercase)
    }
    const Reverse = ()=>{
      let spl = text.split("")
      let rev = spl.reverse()
      let join = rev.join("")
      settext(join)
    }
    const CopyHandler = ()=>{
      let text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)

    }
    const ExtraspaceHandler = ()=>{
    let newText = text.split(/[ ]+/);
    console.log(text)
    settext(newText.join(" "))
    }
    const DarkModehandler = ()=>{
      document.body.style.backgroundColor = 'black'
    }
  return (
    <>
    <div className="container">
    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">{props.message}</label>
  <textarea class="form-control" value={text} onChange={handlechange} placeholder='Enter Your Text' id="myBox" rows="8"></textarea>
</div>
<button type="button" class="btn btn-secondary" style={{margin:'0px 5px'}} onClick={upercaseHandler} >UperCase</button>
<button type="button" class="btn btn-secondary"style={{margin:'0px 5px'}} onClick={lowerCasehandler} >LowerCase</button>
<button type="button" class="btn btn-secondary"style={{margin:'0px 5px'}} onClick={Reverse} >Reverse</button>
<button type="button" class="btn btn-secondary"style={{margin:'0px 5px'}} onClick={CopyHandler} >Copy</button>
<button type="button" class="btn btn-secondary"style={{margin:'0px 5px'}} onClick={ExtraspaceHandler} >Remove ExtraSpace</button>

    </div>
   <p style={{margin:"0px 290px"}} > Your Total Character is {text.split(" ").length} & Your Word is{text.length}  </p> <br />
  <h5 style={{margin:"0px 290px"}}> You Can read with {0.008*text.split(" ").length} This Time.</h5>
  <span style={{margin:"0px 290px"}}>Your paragharam have {text.count} vovels ;</span>
  <h2 style={{margin:"0px 290px"}}>Pre-View</h2>
  <h6 style={{margin:"0px 290px"}}>{text}</h6>
  
    </>
  )
}

export default TextForm
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function GetData() {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get ("http://localhost:4000/getdata")
        // .then((res)=>res.json())
        // .then(res=>console.log(res.data.data[0].name))
        .then((data)=>{
            console.log(data.data.data)
            setdata(data.data.data)
        })
        // .then(res=>console.log(res.data.data[0].name))
        // setdata(data.data)
    },[])
    return (
   <>
<table class="table">
  <thead>
    {
       data.map((i)=>{
        return(
       <div className="container">
            {/* <td>{i.name}</td> */}
           <td>{i.email}</td>
       </div>
        )
       })
    }
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
    </tr>
  </thead>
{/* {
    data.map((i)=>{
        return(
            <tr>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.password}</td>
            </tr>
        )
    })
} */}
</table>










   </>
  )
}

export default GetData
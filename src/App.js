// import Login from "./Component/Login/Login";
// import Register from "./Component/Registration/Register";
// import GetData from "./Component/GetData/GetData";
// import Recustion from "./Prectice/Recustion";
import { useState } from "react";
import Navbar from "./Subcomponent/Navbar";
function App() {
  const [Mode,setMode] = useState("light")
  const togelmode = ()=>{
    if(Mode === "light"){
      document.body.style.backgroundColor="black";
      setMode("black")
    }
    else{
      document.body.style.backgroundColor ="white"
      setMode("light")
    }
  }
  return (
 <>
 {/* <Login/>  */}
{/* <Register/> */}
{/* <GetData/> */}
{/* <Recustion/> */}
<Navbar mode = {Mode} toggeldome = {togelmode}  />
 </>
  );
}

export default App;

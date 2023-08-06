import React, { useState } from 'react'
import TextForm from './TextForm'
function Navbar(props) {

  return (
   <>
   <nav class={ `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
  <div class={`form-check form-switch text ${props.mode ==='light'?"dark":"light"}`}  >
  <input class="form-check-input" onClick={props.toggeldome} type="checkbox"role="switch" id="flexSwitchCheckDefault"/>
</div>
</nav>
<TextForm message="Zaki Text Book "/>
   </>
  )
}

export default Navbar
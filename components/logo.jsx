import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () =>{
  return(
    <Link to='/'  >
    <div className="logo">
      <img src="https://firebasestorage.googleapis.com/v0/b/preetifotos-e4812.appspot.com/o/images%2FPreetiPF_logo.svg?alt=media&token=18913d76-d81d-4f4f-98c8-0665bb862b24" alt="Logo" />
      <h1>Preeti<br/>
      Fotography</h1>
    </div>
    </Link>
  )
}
export default Logo;
// import React from 'react'

import { useNavigate } from "react-router-dom";
import "./signin.css";
const signin = () => {
  const navigate = useNavigate();

  function login() {   
    const password = document.querySelector('.passInput').value;
    const userId = document.querySelector('.unameInput').value; 
    const img = document.querySelector('.box2');
    const thumbsup = document.querySelector('.thumbsup');
    const thumbsdown = document.querySelector('.thumbsdoen');
    if(userId=='admin' ||userId=='Admin' && password=='admin'){
      thumbsup.style.display='block';
      thumbsdown.style.display='none';
      setTimeout(()=>{navigate("/coursepage")}, 2000);
    }
    else{
      // alert("Invalid User Id or Password");
      thumbsdown.style.display='block';
      img.style.backgroundImage = "../../../images/thumsup-removebg-preview.png";
      setTimeout(()=>{window.location.reload()}, 2000);
    }
  };

  function singup() {
    navigate('/Signup');
  }
  let jumpToHome = ()=>{
    navigate('/')
  }

  return (
    <>
      <div className="body">
        <div className='hellow'></div>
        <div className="box1">
          <h1 className="h1tag">Sign In</h1><br />
          <div className='userid'><h2>User Id :  </h2><input className='unameInput' type="text" placeholder='Enter User Id' /></div><br /><br />
          <div className="password"><h2>Password : </h2><input className='passInput' type="password" placeholder='Enter the password' /></div><br />
          <center><div className='btn'>
          <button type="submit" className='HomeBtn' onClick={jumpToHome}><b>&larr;Home</b></button>
            <button type="submit" className='loginbtn' onClick={login}><b>Log in</b></button>
            <button type="submit" className='signupbtn'onClick={singup} ><b>Sign up</b></button>
          </div>  </center>                            
          <center><div className="box2">      
          <div className="thumbsup"></div>    
          <div className="thumbsdoen"></div>  
        </div></center>                           
        </div>

      </div>
    </>

  )
}



export default signin
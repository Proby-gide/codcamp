// import React from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
const signup = () => {
  const navigate = useNavigate();
  function event() {
    const name = document.getElementById('name').value.trim()
    const pass = document.getElementById('pass').value.trim()
    const cpass = document.getElementById('cpass').value.trim()
    const tup = document.querySelector('.tup')
    const tdown = document.querySelector('.tdown')
    if (name !== "" && pass !== "" && cpass !== "") {
      if (pass === cpass) {
        tup.style.display = 'block';
        tdown.style.display = 'none';
        setTimeout(() => {
          navigate('/coursepage')
        }, 2000);
      } else {
        tdown.style.display = 'block';
        tup.style.display = 'none';
        setTimeout(()=>{alert('Passwords do not match');},1);
      }
    }
    else{
      
      tdown.style.display = 'block';
      tup.style.display = 'none';
      setTimeout(()=>{alert('Invalid input');window.location.reload();},2000)
    }
  }

  return (
    <>
      <div className="body1">
        <center><div className="logo"></div></center>
        <h1 className='SignUp'>Sign Up</h1><br /><br /><br />

        <div className="boxfordetails">
          <span>Name: <br /><input type="text" id="name" placeholder='Enter your name'/></span> <br />
          <span>Password : <br /><input type="password" id="pass" placeholder='Enter your password'/></span><br />
          <span>Conform Password : <br /><input type="password" id="cpass" placeholder='Conform your password'/></span><br />

          <center><button type="submit" onClick={event} className='redbutton'><b>Sign Up</b></button></center>
          <div className="account">Already have an account? <Link to="/Signin"><div className="loginname"><u>Login</u></div></Link></div>
          <center>
            <div className="image">
              <center><div className="tup"></div>
                <div className="tdown"></div></center>
            </div></center>
        </div>
      </div>
    </>
  )
}

export default signup

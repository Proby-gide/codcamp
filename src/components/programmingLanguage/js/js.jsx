// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './js.css'
import '../../MenuBar/Menubar.css'
const py = () => {
  const navigator = useNavigate();
  
  const threelinemenu = () => {
    document.querySelector('.menulist').style.display = 'block';
    document.querySelector('.menu3lines').style.display = 'none';
    document.querySelector('.menuclose').style.display = 'block';
    document.querySelector('.body').style.backdropFilter = 'blur(100px)'; 
    document.querySelector('.body').style.overflow = 'hidden';
  };
  
  const closemenubar = () => {
    document.querySelector('.menulist').style.display = 'none';
    document.querySelector('.menu3lines').style.display = 'block';
    document.querySelector('.menuclose').style.display = 'none';
    document.querySelector('.body').style.backdropFilter = 'none';
    document.querySelector('.body').style.overflow = 'auto';
  };
  
  const home=()=>{navigator('/')}
  const Courses=()=>{ navigator('/coursepage') }
  const Practice=()=>{ navigator('/Quiz') }
  const Articles=()=>{ navigator('/Articals') }  
  const About=()=>{ navigator('/About') }
  
  const handleClick = () => {
    setTimeout(() => {
      navigator('/JSvideo')
    }, 500)
  }
  return (
    <div className='body'>
      
      <div className="menubar">
          <div className="menu3lines" onClick={threelinemenu}>☰</div>
          <div className="menuclose" onClick={closemenubar}>✗</div>
      </div>
      <div className="menulist">
        <div className="valuesoflist">
        <div className="menulist1" onClick={home}>🏠 Home</div>
        <div className="menulist2" onClick={Courses}>📚 Courses</div>
        <div className="menulist3" onClick={Practice}>👨‍💻 Practice</div>
        <div className="menulist4" onClick={Articles}>📝 Articles</div>
        <div className="menulist5" onClick={About}>ℹ️ About</div>
        </div>
      </div>

      <center><div className="jswallpaperimage"></div></center>
      <center><button type="submit" className='StartButton' onClick={handleClick}> Start </button></center>
      <h2 className='PythonCourseIndex'>JS Course Index</h2>
      <center><div className="indexOfPthon">
        <div className="js1">JavaScript Tutorial for Beginners | Introduction</div>
        <div className="js2">Getting Started | JavaScript Tutorial for Beginners</div>
        <div className="js3">NodeJS, VS Code Installation | JavaScript Tutorial</div>
        <div className="js4">Variables in JavaScript</div>
        <div className="js5">Constants in JavaScript</div>
        <div className="js6">Data Types in JavaScript</div>
        <div className="js7">Data Types in JavaScript</div>
        <div className="js8">History of JavaScript</div>
        <div className="js9">Type Conversion & Coercion in JavaScript</div>
        <div className="js10">Arithmetic Operators in JavaScript</div>
        <div className="js11">Relational operators in JavaScript</div>
        <div className="js12">Logical Operators in JavaScript</div>
        <div className="js13">Conditional Statements If Else in JavaScript</div>
        <div className="js14">Ternary Operator in JavaScript</div>
        <div className="js15">Switch Statement in JavaScript</div>
        <div className="js16">Template Literal in JavaScript</div>
        <div className="js17">While loop in JavaScript</div>
        <div className="js18">For Loop in JavaScript</div>
        <div className="js19">While vs For Loop | Which to use and When?</div>
        <div className="js20">Objects in JavaScript</div>
        <div className="js21">Complex Object, Delete Property in JavaScript</div>
        <div className="js22">For in loop in JavaScript</div>
        <div className="js23">Functions in JavaScript</div>
        <div className="js24">Function return and passing</div>
        <div className="js25">Function Expression in JavaScript</div>
        <div className="js26">Local-Global Variable | Default Value in JavaScript</div>
        <div className="js27">Arrow function in JavaScript</div>
        <div className="js28">What are Methods in JavaScript?</div>
        <div className="js29">What is this? | JavaScript</div>
        <div className="js30">Why it is called THIS</div>
      </div></center><br />
    </div>
  )
}

export default py

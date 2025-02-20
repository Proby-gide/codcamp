// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './java.css'
import '../../MenuBar/Menubar.css'

const py = () => {
  const navigator = useNavigate()
  const handleClick = () => {
    setTimeout(() => {
      navigator('/Javavideo')
    }, 500)
  }
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
      <center><div className="javawallpaperimage"></div></center>
      <center><button type="submit" className='StartButton' onClick={handleClick}> Start </button></center>
      <h2 className='PythonCourseIndex'>Java Course Index</h2>
      <center><div className="indexOfPthon">
        <div className="java1">Why take this Java Course?</div>
        <div className="java2">Programs and Programming Languages</div>
        <div className="java3">Introduction to Java Programming</div>
        <div className="java4">Anatomy of Java Program</div>
        <div className="java5">Displaying Messages in Java</div>
        <div className="java7">Displaying Numbers in Java</div>
        <div className="java6">Configuring our Java Development Environment</div>
        <div className="java9">Creating, Compiling, and Executing a Java Program</div>
        <div className="java8">Our First Java Project</div>
        <div className="java10">Java Packages, Classes, and Methods</div>
        <div className="java11">public, private, and static in Java</div>
        <div className="java12">The void Return Type in Java</div>
        <div className="java13">Command Line Arguments in Java</div>
        <div className="java14">Programming Styles</div>
        <div className="java15">Programming Errors</div>
        <div className="java16">Type Faster in IntelliJ</div>
        <div className="java17">Java Exercise - Creating Classes & Methods</div>
        <div className="java18">Java Basics - An Overview</div>
        <div className="java19">Introduction to Variables in Java</div>
        <div className="java20">Variables in Java - Practice</div>
        <div className="java21">Constants in Java</div>
        <div className="java22">Identifiers in Java</div>
        <div className="java23">Introduction to Data Types in Java</div>
        <div className="java24">The int Data Type in Java</div>
        <div className="java25">The byte, short, and long Data Types in Java</div>
        <div className="java26">Integers Data Types in Java - Practice</div>
        <div className="java27">Bytes and Values in Java</div>
        <div className="java28">The char Data Type in Java</div>
        <div className="java29">The double and float Data Types in Java</div>
        <div className="java30">The boolean Data Type in Java</div>
      </div></center><br />
    </div>
  )
}

export default py

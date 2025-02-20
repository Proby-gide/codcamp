// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './cpp.css'
import '../../MenuBar/Menubar.css'
const py = () => {
  const navigator = useNavigate()
  const handleClick = () => {
    setTimeout(() => {
      navigator('/Cppvideo')
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

      <center><div className="cppwallpaperimage"></div></center>
      <center><button type="submit" className='StartButton' onClick={handleClick}> Start </button></center>
      <h2 className='PythonCourseIndex'>C++ Course Index</h2>
      <center><div className="indexOfPthon">
        <div className="cpp1">Lec 00: C++ complete course | Content Overview </div>
        <div className="cpp2">Lec 1: How to Install and Set Visual Studio Code,MinGW Compiler for C++</div>
        <div className="cpp3">Lec 2: What is Object Oriented Programming (OOP) | POP vs OOP </div>
        <div className="cpp4">Lec 3: OOPs Concepts in C++ | Object Oriented Programming Pillars </div>
        <div className="cpp5">Lec 4: Introduction to C++ Programming </div>
        <div className="cpp6">Lec 5: Features of C++ Programming Language </div>
        <div className="cpp7">Lec 6: History of C++ | C++ Tutorials for Beginners</div>
        <div className="cpp8">Lec 7: Basic Structure of a C++ Program </div>
        <div className="cpp9">Lec 8: Variables and Constants in C++ </div>
        <div className="cpp10">Lec 9: Keywords and Identifiers in C++ </div>
        <div className="cpp11">Lec 10: DataTypes with Type Modifiers in C++ - part 1| int Data Type </div>
        <div className="cpp12">Lec 11: Data Types in C++ - part 2 | float Data Type </div>
        <div className="cpp13">Lec 12: Data Types in C++ - part 3 | char Data Type</div>
        <div className="cpp14">Lec 13: Wide Character (wchar_t) Data Type in C++ </div>
        <div className="cpp15">Lec 14: bool and void Data Types in C++ </div>
        <div className="cpp16">Lec 15: Input and Output in C++ </div>
        <div className="cpp17">Lec 16: Operators in C++ Programming- part1 | Arithmetic and Relational</div>
        <div className="cpp18">Lec 17: Operators in C++ Programming - part2| Logical and Bitwise </div>
        <div className="cpp19">Lec 19: Operators Precedence and Associativity in C++ - part 1 </div>
        <div className="cpp20">Lec 19: Operators Precedence and Associativity in C++ - part 1 </div>
        <div className="cpp21">Lec 20: Operators Precedence and Associativity in C++ - part2 </div>
        <div className="cpp22">Lec 21: C++ Control Structures - part 1 | if statement </div>
        <div className="cpp23">Lec 22: C++ Control Structures - part 2 | if else Statement </div>
        <div className="cpp24">Lec 23: C++ Control Structures - part 3 | else if ladder Statements </div>
        <div className="cpp25">Lec 24: C++ Control Structures - part 4 | Nested if and Nested if else </div>
        <div className="cpp26">Lec 25: Switch Case statement in C++ Programming</div>
        <div className="cpp27">Lec 26: Introduction to Loops in C++ </div>
        <div className="cpp28">Lec 27: Loops in C++ | for loop in detail </div>
        <div className="cpp29">Lec 28: Properties of for loop in C++ </div>
        <div className="cpp30">Lec 29: Coding Exercise with Solution for beginners in C++</div>
      </div></center><br />
    </div>
  )
}

export default py

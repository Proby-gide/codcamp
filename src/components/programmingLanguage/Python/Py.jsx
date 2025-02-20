// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Py.css'
const py = () => {
  const navigator = useNavigate()
  const handleClick = () => {
    setTimeout(()=>{
      navigator('/Pyvideo')
    },500)
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



      {/* <iframe src="https://www.youtube.com/embed/DInMru2Eq6E?si=7v75adETcBf1pY_a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      <center><div className="pythonwallpaperimage"></div></center>
      <center><button type="submit" className='StartButton' onClick={handleClick}> Start </button></center>
      <h2 className='PythonCourseIndex'>Python Course Index</h2>
      <center><div className="indexOfPthon">
        <div className="pi1">Introduction to Python Course</div>
        <div className="pi2">Introduction to Python Programming | Python for Beginners </div>
        <div className="pi3">History of Python | Python Tutorials for Beginners</div>
        <div className="pi4">Download and Install Python (lates) and Pycharm </div>
        <div className="pi5">Writing First Python Program | Printing to Console in Python </div>
        <div className="pi6">P_05 Coding Exercises for Beginners in Python </div>
        <div className="pi7">P_06 print() function & String concatenation(using +) in Python</div>
        <div className="pi8">P_07 Input function in Python | Take User Input in Python </div>
        <div className="pi9">P_08 Variables in Python </div>
        <div className="pi10">P_09 Coding Exercises for Beginners in Python | Exercise #2</div>
        <div className="pi11">P_10 Variable Naming Rules in Python  </div>
        <div className="pi12">P_11 Data Types in Python  </div>
        <div className="pi13">P_12 Type Checking, Type Error and Type Conversion</div>
        <div className="pi14">P_13 Coding Exercises for Beginners in Python | Exercise #3 </div>
        <div className="pi15">P_14 Operators in Python | Arithmetic Operators </div>
        <div className="pi16">P_15 Operators in Python | Assignment and Comparison Operators </div>
        <div className="pi17">Operators in Python | Logical Operators </div>
        <div className="pi18">Operators in Python | Bitwise Operators </div>
        <div className="pi19">Identity Operators in Python </div>
        <div className="pi20">Membership Operators in Python </div>
        <div className="pi21">Coding Exercise for Beginners in Python | Exercise #4 </div>
        <div className="pi22">Round() function in Python </div>
        <div className="pi23">F-Strings in Python </div>
        <div className="pi24">Coding Exercise for Beginners in Python| Exercise 5 </div>
        <div className="pi25">If & If Else Conditional Statements in Python </div>
        <div className="pi26">Coding Exercise for Beginners in Python </div>
        <div className="pi27">Nested If Else & elif Statements in Python </div>
        <div className="pi28">P_27 Coding Exercise for Beginners in Python </div>
        <div className="pi29">P_28 Coding Exercise for Beginners in Python | Exercise 8 </div>
        <div className="pi30">P_29 Multiple if Statements in Python	</div>
        <div className="pi31">P_30 Coding Exercise for Beginners in Python | Exercise 9	</div>
        <div className="pi32">P_31 Coding Exercise for Beginners in Python | Love Calculator </div>
        <div className="pi33">P_32 List in Python and List Functions	</div>
        <div className="pi34">P_33 Random Module in Python	</div>
        <div className="pi35">P_34 Coding Exercise for Beginners in Python | Heads or Tails	</div>
        <div className="pi36">Coding Exercise for Beginners in Python |Exercise 12	</div>
        <div className="pi37">Fix Python Index Error: List Index Out of Range </div>
        <div className="pi38">Nested List in Python</div>
        <div className="pi39">Coding Exercise for Beginners in Python |Exercise 13	</div>
        <div className="pi40">Python Project 1 | Rock Paper Scissors Game in Python	</div><br />
      </div></center><br />
    </div>
  )
}

export default py

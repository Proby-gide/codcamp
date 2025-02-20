// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './dsa.css'
import '../../MenuBar/Menubar.css'
const py = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    setTimeout(() => {
      navigate('/DSAvideo')
    }, 500)
  }
  
  const navigator=useNavigate();
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

      <center><div className="dsavawallpaperimage"></div></center>
      <center><button type="submit" className='StartButton1' onClick={handleClick}> Start </button></center>
      <h2 className='PythonCourseIndex'>DSA Course Index</h2>
      <center><div className="indexOfPthon">
        <div className="dsa1">1.1 Arrays in Data Structure | Declaration, Initialization, Memory representation</div>
        <div className="dsa2">1.2 Array Operations - Traversal, Insertion | Explanation with C Program | DSA Course</div>
        <div className="dsa3">1.3 Array Operations | Deletion from Array | Explanation with Code | Data Structure</div>
        <div className="dsa4">1.4 Pointers and Arrays | Data structure Tutorials</div>
        <div className="dsa5">1.5 Introduction to Two Dimensional (2D) Arrays | Implementation of 2D Arrays |Memory representation</div>
        <div className="dsa6">1.6 Pointers and 2-D Arrays | Two dimensional Array | Data Structures & Algorithm Tutorials</div>
        <div className="dsa7">2.1 Introduction to Linked List | Need of Linked List | DSA Tutorials</div>
        <div className="dsa8">2.2 Types of Linked List in Data Structures | DSA Full Course</div>
        <div className="dsa9">2.3 Arrays vs Linked List | Data structures</div>
        <div className="dsa10">2.4 Linked List Implementation in C/C++ | Creation and Display | DSA Tutorials</div>
        <div className="dsa11">2.5 Insertion of a Node in Linked List(at Beginning,End,Specified Position)with Code | DSA Tutorials</div>
        <div className="dsa12">2.6 Deletion of a node from Linked List (from beginning, end, specified position) | DSA Tutorials</div>
        <div className="dsa13">2.7 Find length of Linked List- Iterative approach | DSA Tutorials</div>
        <div className="dsa14">2.8 Reverse a Linked List - Iterative Method | Data Structure Tutorials</div>
        <div className="dsa15">2.9 Introduction to Doubly Linked List in Data structures | DSA Tutorials</div>
        <div className="dsa16">2.10 Implementation of Doubly Linked List - Data Structures</div>
        <div className="dsa17">2.11 Insertion in Doubly Linked List(beginning, end, specific position) | Data Structures</div>
        <div className="dsa18">2.12 Deletion from Doubly Linked List (beginning,end,specific position) | Data Structures Tutorials</div>
        <div className="dsa19">2.13 Reverse a Doubly Linked List | Data Structures & Algorithm Tutorials</div>
        <div className="dsa20">2.14 Circular Linked List in Data Structure | Creation and Display | DSA Course</div>
        <div className="dsa21">2.15 Implementation of Circular linked list in C | Data Structure Tutorials</div>
        <div className="dsa22">2.16 Insertion in Circular Linked List | Data Structure Tutorials</div>
        <div className="dsa23">2.17 Deletion of a Node from Circular Linked List(beginning, end, given position) | DSA Tutorials</div>
        <div className="dsa24">2.18 Reverse a Circular Linked List | Data Structure Tutorials</div>
        <div className="dsa25">2.19 Implementation of Doubly Circular Linked List| Creation and Display | Data Structures</div>
        <div className="dsa26">2.20 Insertion in Doubly Circular Linked List | Data Structure & Algorithm Tutorials</div>
        <div className="dsa27">2.21 Deletion from Doubly Circular Linked List | Data Structure & Algorithm Course</div>
        <div className="dsa28">3.1 Stack in Data Structure | Introduction to Stack | Data Structures Tutorials</div>
        <div className="dsa29">3.2 Implementation of Stack using Array | Data Structure and Algorithm Tutorials</div>
        <div className="dsa30">3.3 Stack implementation using Linked List | Data Structures and Algorithm Tutorials</div>
      </div></center><br />
    </div>
  )
}

export default py

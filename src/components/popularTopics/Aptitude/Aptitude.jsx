// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Aptitude.css'
import '../../MenuBar/Menubar.css'
const py = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    setTimeout(() => {
      navigate('/AptitudeVideo')
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

      <center><div className="aptvawallpaperimage"></div></center>
      <center><button type="submit" className='StartButton1' onClick={handleClick}> Start </button></center>
      <h2 className='PythonCourseIndex'>Aptitude Course Index</h2>
      <center><div className="indexOfPthon">
        <div className="apt1">Fractions and Decimals </div>
        <div className="apt2">Simplification</div>
        <div className="apt3">Surds and Indices </div>
        <div className="apt4">Permutation and Combination</div>
        <div className="apt5">Probability</div>
        <div className="apt6">Mixture and Alligation</div>
        <div className="apt7">Ratio and Proportion</div>
        <div className="apt8">HCF and LCM</div>
        <div className="apt9">Work and Wages</div>
        <div className="apt10">Compound Interest</div>
        <div className="apt11">Simple Interest</div>
        <div className="apt12">Profit and Loss</div>
        <div className="apt13">Discount</div>
        <div className="apt14">Speed, Distance & Time</div>
        <div className="apt15">Percentage</div>
        <div className="apt16">Pipes and Cisterns</div>
        <div className="apt17">Time and Work</div>
        <div className="apt18">Boats and Streams</div>
        <div className="apt19">Problems on Trains</div>
        <div className="apt20">Problems on Numbers</div>
        <div className="apt21">Problems on Ages</div>
        <div className="apt22">Partnership</div>
        <div className="apt23">Square & Cube Roots</div>
        <div className="apt24">Averages</div>
        <div className="apt25">Chain Rule</div>
        <div className="apt26">How to prepare for Placement Aptitude Test?</div>
        <div className="apt27">Area & Perimeter</div>
        <div className="apt28">Volume & Surface Area</div>
        <div className="apt29">Height and Distance</div>
        <div className="apt30">Pie Chart</div>
        <div className="apt31">Algebra</div>
      </div></center><br />
    </div>
  )
}

export default py

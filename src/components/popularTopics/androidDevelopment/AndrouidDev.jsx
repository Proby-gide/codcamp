// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AndrouidDev.css'
import '../../MenuBar/Menubar.css'
const py = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    setTimeout(() => {
      navigate('/Androidvideo')
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

      <center><div className="andavawallpaperimage"></div></center>
      <center><button type="submit" className='StartButton1' onClick={handleClick}> Start </button></center>
      <h2 className='PythonCourseIndex'>DSA Course Index</h2>
      <center><div className="indexOfPthon">
        <div className="and1">🚀 The Complete Android JetPack Course - Mastering Jetpack</div>
        <div className="and2">The Complete Firebase & Android Course - Mastering Firebase</div>
        <div className="and3">Installing Android Studio & SDK Configuration - Mastering Android #1</div>
        <div className="and4">Android Studio User Interface - Mastering Android #2</div>
        <div className="and5">Creating Android Emulators - Mastering Android #3</div>
        <div className="and6">Android Studio Code Editor - Mastering Android #4</div>
        <div className="and7">Android Project Structure - Mastering Android #5</div>
        <div className="and8">Android TextView - Mastering Android #6</div>
        <div className="and9">Android EditText - Mastering Android #7</div>
        <div className="and10">How to Get Data from EditText - Mastering Android #8</div>
        <div className="and11">Buttons in Android- Mastering Android #9</div>
        <div className="and12">Handling Button Click Events - Mastering Android #10</div>
        <div className="and13">Creating The Welcome App in Android - Mastering Android #11</div>
        <div className="and14">ImageView in Android Studio - Mastering Android #12</div>
        <div className="and15">Building Unit Converter App in Android Studio - Mastering Android #13</div>
        <div className="and16">Android Layouts - Mastering Android #14</div>
        <div className="and17">Linear Layouts in Android Studio - Mastering Android #15</div>
        <div className="and18">Relative Layouts in Android Studio - Mastering Android #16</div>
        <div className="and19">Constraint Layouts in Android Studio - Mastering Android #17</div>
        <div className="and20">Activity Life Cycle in Android - Mastering Android #18</div>
        <div className="and21">Understanding Methods Callbacks in Android - Mastering Android #19</div>
        <div className="and22">Explicit Intent in Android - Mastering Android #20</div>
        <div className="and23">Implicit Intent in Android - Mastering Android #21</div>
        <div className="and24">Android Manifest in Android Studio - Mastering Android #22</div>
        <div className="and25">String Resources in Android Studio - Mastering Android #23</div>
        <div className="and26">Colors in Android Studio - Mastering Android #24</div>
        <div className="and27">How to add Custom Fonts to Android App - Mastering Android #25</div>
        <div className="and28">What is Gradle in Android Studio - Mastering Android Course #26</div>
        <div className="and29">Drawables in Android Studio - Mastering Android Course #27</div>
        <div className="and30">Checkbox in Android Studio - Mastering Android Course #28</div>

      </div></center><br />
    </div>
  )
}

export default py

// import React from 'react'
import './courses.css';
import './courses1.css';
import { useNavigate } from 'react-router-dom';
const Courses = () => {
  const navigator=useNavigate();
// -------------------------------------------Menu Bar------------------------------------------------------
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
// --------------------------------------------------------------------------------
const moveTopythonfine=()=>{
  setTimeout(()=>{navigator('/Python')},300);
}
const moveTojavaFine=()=>{
  setTimeout(()=>{navigator('/Java')},300);
}
const moveTojsFine=()=>{
  setTimeout(()=>{navigator('/JS')},300);
}
const moveToCPPFine=()=>{
  setTimeout(()=>{navigator('/CPP')},300);
}

const moveToAptitudeFine=()=>{
  setTimeout(()=>{navigator('/Aptitude')},300);
}
const moveToDSAFine=()=>{
  setTimeout(()=>{navigator('/DSA')},300);
}
const moveToWebFine=()=>{
  setTimeout(()=>{navigator('/Web')},300);
}
const moveToAndroidFine=()=>{
  setTimeout(()=>{navigator('/Android')},300);
}
const quiz=()=>{
  setTimeout(()=>{navigator('/Quiz')},300);
}
const artical=()=>{
  setTimeout(()=>{navigator('/Articals')},300);
}
  return (
    <div className='body'>
      {/* ------------------------------------------------------------- */}
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
      {/* --------------------------------------------------------------------- */}
      <div className="welcome"><div className="logatcourse"></div></div>
      <div className="ProgrammingLanguages"><b>Programming Languages</b></div>
      <div className="fourblocks">
        <div className="Pythonbloc" onClick={moveTopythonfine}>
          <div className="pythonimgandtext">
            <div className="imgpy"></div>
            <div className="textpy">Python</div>
            <center><div className="coursesnumber">30+ Courses</div></center>
          </div>
        </div>
        <div className="javablock"onClick={moveTojavaFine}>
          <div className="javaimageandtext">
            <div className="imgjava"></div>
            <div className="textjava">Java</div>
            <center><div className="coursesnumber">30+ Courses</div></center>
          </div>
        </div>
        <div className="jsblock" onClick={moveTojsFine}>
          <div className="jsimageandtext">
            <div className="jsimg"></div>
            <div className="textjs">Javascript</div>
           <center><div className="coursesnumber">30+ Courses</div></center>
          </div>
        </div>
        <div className="cplusplusblock" onClick={moveToCPPFine}>
          <div className="cppimageandtext">
            <div className="cppimg"></div>
            <div className="cpptext">C++</div>
            <center><div className="coursesnumber">30+ Courses</div></center>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      <div className="pt">Popular Topics</div>
      <div className="fourbox">
        <div className="aptitudebox" onClick={moveToAptitudeFine}>
          <center><div className="aptitudeimg"></div></center>
          <div className="aptitudetext">Aptitude</div>
          <center><div className="coursesnumber">30+ Courses</div></center>

        </div>
        <div className="DSAbox" onClick={moveToDSAFine}>
          <center><div className="DSAimg"></div></center>
          <div className="DSAtext">DSA</div>
          <center><div className="coursesnumber">30+ Courses</div></center>

        </div>
        <div className="webdevelopmentbox" onClick={moveToWebFine}>
          <center><div className="webdevelopmentimg"></div></center>
          <div className="webdevelopmenttext">Web Development</div>
          <center><div className="coursesnumber">30+ Courses</div></center>

        </div>
        <div className="androuidbox" onClick={moveToAndroidFine}>
          <center><div className="androidimg"></div></center>
          <div className="androidtext">Android Development</div>
          <center><div className="coursesnumber">30+ Courses</div></center>
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      <div className="practiveAndArticaltitle">Practice and Articles</div>
      <center><div className="practiveAndArticalbox">
        <div className="practivebox" onClick={quiz}></div>
        <div className="Articalbox" onClick={artical}></div>
      </div></center>
      <div className="footer"></div>
    </div>
  )
}

export default Courses

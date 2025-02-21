// import React from 'react'
import '../../Course/courses.css'
import '../../Course/courses1.css'
import './Quiz.css'
import { useNavigate } from 'react-router-dom'
const Quiz = () => {
  const navigator = useNavigate();
  // --------------------------------Menu Bar-----------------------------------------------
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

  const home = () => { navigator('/') }
  const Courses = () => { navigator('/coursepage') }
  const Practice = () => { navigator('/Quiz') }
  const Articles = () => { navigator('/Articals') }
  const About = () => { navigator('/About') }
  // --------------------------------------------------------------------------------
  const moveTopythonfine = () => {
    setTimeout(() => { navigator('/PythonQuiz') }, 300);
  }
  const moveTojavaFine = () => {
    setTimeout(() => { navigator('/JavaQuiz') }, 300);
  }
  const moveTojsFine = () => {
    setTimeout(() => { navigator('/JSQuiz') }, 300);
  }
  const moveToCPPFine = () => {
    setTimeout(() => { navigator('/CPPQuiz') }, 300);
  }

  const moveToAptitudeFine = () => {
    setTimeout(() => { navigator('/AptitudeQuiz') }, 300);
  }
  const moveToDSAFine = () => {
    setTimeout(() => { navigator('/DSAQuiz') }, 300);
  }
  const moveToWebFine = () => {
    setTimeout(() => { navigator('/WebQuiz') }, 300);
  }
  const moveToAndroidFine = () => {
    setTimeout(() => { navigator('/AndroidQuiz') }, 300);
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
      <div className="quizetimeword"></div>
      <div className="listcontent">
        <div className="ProgrammingLanguages"><b>Languages Quiz</b></div>
        <div className="fourblocks">
          <div className="Pythonbloc" onClick={moveTopythonfine}>
            <div className="pythonimgandtext">
              <div className="imgpy"></div>
              <div className="textpy">Python</div>
              <center><div className="coursesnumber"><b>Quiz</b></div></center>
            </div>
          </div>
          <div className="javablock" onClick={moveTojavaFine}>
            <div className="javaimageandtext">
              <div className="imgjava"></div>
              <div className="textjava">Java</div>
              <center><div className="coursesnumber"><b>Quiz</b></div></center>
            </div>
          </div>
          <div className="jsblock" onClick={moveTojsFine}>
            <div className="jsimageandtext">
              <div className="jsimg"></div>
              <div className="textjs">Javascript</div>
              <center><div className="coursesnumber"><b>Quiz</b></div></center>
            </div>
          </div>
          <div className="cplusplusblock" onClick={moveToCPPFine}>
            <div className="cppimageandtext">
              <div className="cppimg"></div>
              <div className="cpptext">C++</div>
              <center><div className="coursesnumber"><b>Quiz</b></div></center>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
        <div className="pt">Popular Quiz Topic</div>
        <div className="fourbox">
          <div className="aptitudebox" onClick={moveToAptitudeFine}>
            <center><div className="aptitudeimg"></div></center>
            <div className="aptitudetext">Aptitude</div>
            <center><div className="coursesnumber"><b>Quiz</b></div></center>

          </div>
          <div className="DSAbox" onClick={moveToDSAFine}>
            <center><div className="DSAimg"></div></center>
            <div className="DSAtext">DSA</div>
            <center><div className="coursesnumber"><b>Quiz</b></div></center>

          </div>
          <div className="webdevelopmentbox" onClick={moveToWebFine}>
            <center><div className="webdevelopmentimg"></div></center>
            <div className="webdevelopmenttext">Web Development</div>
            <center><div className="coursesnumber"><b>Quiz</b></div></center>

          </div>
          <div className="androuidbox" onClick={moveToAndroidFine}>
            <center><div className="androidimg"></div></center>
            <div className="androidtext">Android Development</div>
            <center><div className="coursesnumber"><b>Quiz</b></div></center>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz

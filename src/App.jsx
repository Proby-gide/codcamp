// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Menu from './components/MenuBar/Menubar'
import SignIn from "./components/SignIn/Signin";
import SignUp from "./components/Signup/Signup";
import Home from './components/Home/Home';
import Course from './components/Course/Courses';
import About from './components/About/About'


import Quiz from './components/PracticeAndArticals/Quiz/Quiz'
import PythonQuiz from './components/PracticeAndArticals/Quiz/pythonquiz'
import JavaQuiz from './components/PracticeAndArticals/Quiz/javaquiz'
import JSQuiz from './components/PracticeAndArticals/Quiz/jsquiz'
import CPPQuiz from './components/PracticeAndArticals/Quiz/cppquiz'
import AptitudeQuiz from './components/PracticeAndArticals/Quiz/aptitudequiz'
import DSAQuiz from './components/PracticeAndArticals/Quiz/dsaquiz'
import WebQuiz from './components/PracticeAndArticals/Quiz/webdevquiz'
import AndroidQuiz from './components/PracticeAndArticals/Quiz/androidquiz'


import Articals from './components/PracticeAndArticals/Artical/Artical'

import Python from './components/programmingLanguage/Python/Py'
import Pyvideo from './components/programmingLanguage/Python/Pyvideos'


import Java from './components/programmingLanguage/java/java'
import Javavideo from './components/programmingLanguage/java/javavideo'


import JS from './components/programmingLanguage/js/js'
import JSvideo from './components/programmingLanguage/js/jsvideo'

import CPP from './components/programmingLanguage/c++/cpp'
import Cppvideo from './components/programmingLanguage/c++/cppvideo'

import Aptitude from './components/popularTopics/Aptitude/Aptitude'
import Aptitudelist from './components/popularTopics/Aptitude/Aptitudevideo'

import DSA from './components/popularTopics/DSA/dsa'
import DsaVideo from './components/popularTopics/DSA/Dsavideo'

import Web from './components/popularTopics/WebDevelopment/webDev'
import WebVideo from './components/popularTopics/WebDevelopment/WebdevVideo'

import Android from './components/popularTopics/androidDevelopment/AndrouidDev'
import AndroidVideo from './components/popularTopics/androidDevelopment/AndroidVideo'

const App = () => {
  // <Menu />
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/Menu' element={<Menu/>}></Route> */}
        <Route path='/Signin' element={<SignIn/>}></Route>
        <Route path="/Signup" element={<SignUp />} />
        <Route path='/coursepage' element={< Course/>}></Route>
        <Route path='/About' element={< About/>}></Route>
        <Route path='/Quiz' element={< Quiz/>}></Route>
        <Route path='/Articals' element={< Articals/>}></Route>
        <Route path='/Python' element={< Python/>}></Route>
        <Route path='/Pyvideo' element={< Pyvideo/>}></Route>
        <Route path='/Java' element={< Java/>}></Route>
        <Route path='/Javavideo' element={< Javavideo/>}></Route>
        <Route path='/JSvideo' element={< JSvideo/>}></Route>
        <Route path='/JS' element={< JS/>}></Route>
        <Route path='/CPP' element={< CPP/>}></Route>
        <Route path='/Cppvideo' element={< Cppvideo/>}></Route>
        <Route path='/Aptitude' element={< Aptitude/>}></Route>
        <Route path='/AptitudeVideo' element={< Aptitudelist/>}></Route>
        <Route path='/DSA' element={< DSA/>}></Route>
        <Route path='/DSAvideo' element={< DsaVideo/>}></Route>
        <Route path='/Web' element={< Web/>}></Route>
        <Route path='/Webvideo' element={< WebVideo/>}></Route>
        <Route path='/Android' element={< Android/>}></Route>
        <Route path='/Androidvideo' element={< AndroidVideo/>}></Route>
        
        <Route path='/PythonQuiz' element={< PythonQuiz/>}></Route>
        <Route path='/JavaQuiz' element={< JavaQuiz/>}></Route>
        <Route path='/JSQuiz' element={< JSQuiz/>}></Route>
        <Route path='/CPPQuiz' element={< CPPQuiz/>}></Route>
        <Route path='/AptitudeQuiz' element={< AptitudeQuiz/>}></Route>
        <Route path='/DSAQuiz' element={< DSAQuiz/>}></Route>
        <Route path='/WebQuiz' element={< WebQuiz/>}></Route>
        <Route path='/AndroidQuiz' element={< AndroidQuiz/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;

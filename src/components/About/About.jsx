import React from 'react'
import './About.css'
import '../MenuBar/Menubar.css'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigator = useNavigate();
  const threelinemenu = () => {
    document.querySelector('.menulist').style.display = 'block';
    document.querySelector('.menu3lines').style.display = 'none';
    document.querySelector('.menuclose').style.display = 'block';
    document.querySelector('.body').style.backdropFilter = 'blur(100px)';
    document.querySelector('.body').style.overflow = 'hidden';
  };
const gmail=() =>{
    window.open('https://shreyasshridharkulkarni.netlify.app/');  
  };
  const closemenubar = () => {
    document.querySelector('.menulist').style.display = 'none';
    document.querySelector('.menu3lines').style.display = 'block';
    document.querySelector('.menuclose').style.display = 'none';
    document.querySelector('.body').style.backdropFilter = 'none';
    document.querySelector('.body').style.overflow = 'auto';
  };

  const linkedin=() =>{
    window.open('https://www.linkedin.com/in/shreyas-shridhar-kulkarni-946a0225a/?originalSubdomain=in');
  };

  const home = () => { navigator('/') }
  const Courses = () => { navigator('/coursepage') }
  const Practice = () => { navigator('/Quiz') }
  const Articles = () => { navigator('/Articals') }
  const About = () => { navigator('/About') }

  return (
    <div className='bodyforabout'>
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



      {/* ------------------------------------------------------------------------------------ */}

      <center><div className="adminPhoto"> …</div></center><br />
      <center><div className="adminabout">
        <p><b>Shreyas Shridhar Kulkarni</b>, a passionate developer and innovator in the fields of Full Stack Development, Artificial Intelligence, Cybersecurity, and Machine Learning, introduces Code Camp — a free learning platform designed to equip engineering students with essential software skills. <br /> <br />

          With a vision to make high-quality tech education accessible to everyone, <b>Code Camp</b> offers hands-on resources, interactive tutorials, and real-world projects that bridge the gap between theory and practical application. Whether you're just starting your coding journey or looking to sharpen your skills, Code Camp provides the tools and guidance to help you succeed in the fast-evolving tech industry. <br /><br />

          Join <b>Code Camp</b> today and build the skills you need to shape the future of technology</p>
        <br />
        <div className="imgcontainer">
          <div className="linkDinelogo" onClick={linkedin}></div>
          <div className="gmaillogo" onClick={gmail}></div>
          </div>
      </div></center>





    </div>
  )
}

export default About
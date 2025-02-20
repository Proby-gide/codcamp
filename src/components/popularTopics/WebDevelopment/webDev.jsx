// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './webDev.css'
import '../../MenuBar/Menubar.css'
const py = () => {

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
  
  const handleClick = () => {
    setTimeout(() => {
      navigator('/Webvideo')
    }, 500)
  }
  
  
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

      <center><div className="webvawallpaperimage"></div></center>
      <center><button type="submit" className='StartButton1' onClick={handleClick}> Start </button></center>
      <h2 className='PythonCourseIndex'>Web Deve Course Index</h2>
      <center><div className="indexOfPthon">
        <div className="web1">Introduction to Web Development</div>
        <div className="web2">Building Your First Website </div>
        <div className="web3">Intro to HTML, HEAD, BODY, and HEADER </div>
        <div className="web4">Lists, Paragraphs, and Text Styling </div>
        <div className="web5">Displaying Data With Table </div>
        <div className="web6">Learn HTML Forms, Img and Iframe Tags </div>
        <div className="web7">Learn HTML Forms, Img and Iframe Tags </div>
        <div className="web8">How to use Inline, Internal and External CSS </div>
        <div className="web9">Element, ID and Class Selectors </div>
        <div className="web10">CSS Colors and Shadows </div>
        <div className="web11">CSS Backgrounds And Borders </div>
        <div className="web12">Using browser inspector tools </div>
        <div className="web13">Combinators in CSS </div>
        <div className="web14">Grouping in CSS </div>
        <div className="web15">Specificity in CSS </div>
        <div className="web16">Text Styling And Formatting </div>
        <div className="web17">Google Fonts API </div>
        <div className="web18">Responsive CSS Images </div>
        <div className="web19">CSS Padding And Margin </div>
        <div className="web20">CSS Rows And Columns </div>
        <div className="web21">Intro to building your first CSS for website </div>
        <div className="web22"> Building the Navbar </div>
        <div className="web23"> Making the Navbar Mobile Responsive, Part 1 </div>
        <div className="web24">Making the Navbar Mobile Responsive Part 2 </div>
        <div className="web25">Creating the Form Group </div>
        <div className="web26">Working with CSS iframes </div>
        <div className="web27">Working with CSS images and box shadows </div>
        <div className="web28">Working with text and image spacing </div>
        <div className="web29">Building the footer using CSS </div>
        <div className="web30">Introduction to JavaScript Tutorial For Beginners </div>
      </div></center><br />
    </div>
  )
}

export default py

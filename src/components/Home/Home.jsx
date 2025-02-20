// import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Home.css'
const Home = () => {

  const navigate = useNavigate()
  function getstart(){
    setTimeout(()=>{navigate('/Signin')},1000);
  }
  return (
    <>
      <div className='body'>
        <div className="statingImage"></div>
        <marquee behavior="alternate" direction="right"><h1a className='h1a'>Wellcome to CodeCamp</h1a></marquee>
        <div className="text">The tool for mastering the Sowftware engineering skills</div>
        <div className="text1">Unlimited acceess to practice problems, video explanation and articles</div>
        <div className="text2">Learn at your own pace</div>
        <button className='GetStarted' type='submit' onClick={getstart}>Get Started</button>
        <div className="threeContainer">
          <div className="practiceProblebox">
            <div className="a128218">&#128218;</div>
            <div className="practiceproblem">Practice problems</div>
          </div>
          <div className="videoExplanationbox">
            <div className="atv📺">📺</div>
            <div className="VideoExplanationText">Video Explanation</div>
          </div>
          <div className="articalbox">
            <div className="a128240">&#128240;</div>
            <div className="practiceproblemss">Articles</div>
          </div>
        </div>
        <button type="submit" className='Startlearning' onClick={getstart}>Start learning</button>
      </div>

      {/* body end */}
    </>
  )
}

export default Home

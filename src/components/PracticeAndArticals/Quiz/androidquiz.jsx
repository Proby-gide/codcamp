// import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const androidquiz = () => {
  const location = useLocation();

  useEffect(() => {
    const preventBack = () => {
      window.history.pushState(null, document.title, window.location.href);
    };

    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', preventBack);

    return () => {
      window.removeEventListener('popstate', preventBack);
    };
  }, [location]);
  return (
    <div>
      <div className="containerfortheframe">
        <iframe className='frameofthequiz' src="https://www.wscubetech.com/resources/android/quiz" frameborder="0"></iframe>
      </div>
    </div>
  )
}

export default androidquiz

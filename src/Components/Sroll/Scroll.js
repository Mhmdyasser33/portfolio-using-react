import React, { useState, useEffect } from 'react';
import './Scroll.css'

function App() {
  const [scrollDirection, setScrollDirection] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollDirection('up');
    } else {
      setScrollDirection('down');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${scrollDirection}`}>
      svbfbfb
    </div>
  );
}

export default App;

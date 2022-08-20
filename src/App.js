import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Main from './components/Main';
<<<<<<< HEAD
import Navbar from './components/Navbar';
import Features from './components/Features';
import Screens from './components/Screens';
import Home from './components/Home';
import HomeTest from './components/HomeTest';
import NavigationBar from './components/NavigationBar';
=======
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Features from './components/Features';
import Screens from './components/Screens';
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false)
<<<<<<< HEAD
    }, 2000);
=======
    }, 3000);
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6
  
    return () => clearInterval(interval);

  },[]);

  return(
    <div className='App'>
      <Loader isLoading={loading} />
      
<<<<<<< HEAD
      
=======
>>>>>>> 07e9bf252847a0b85a68ce570bebe31fb80b01c6
      <Main isLoading={loading}>
        <NavigationBar />
        <Home />
        <Features/>
        <Screens />
      </Main>
      
    </div>
  )
}

export default App;

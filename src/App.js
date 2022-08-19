import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Screens from './components/Screens';
import Home from './components/Home';
import HomeTest from './components/HomeTest';
import NavigationBar from './components/NavigationBar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false)
    }, 2000);
  
    return () => clearInterval(interval);

  },[]);

  return(
    <div className='App'>
      <Loader isLoading={loading} />
      
      
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

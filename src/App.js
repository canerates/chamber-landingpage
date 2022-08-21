import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Main from './components/Main';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Features from './pages/Features';
import Screens from './pages/Screens';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false)
    }, 3000);
  
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

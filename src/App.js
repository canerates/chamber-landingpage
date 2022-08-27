import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Loader from './components/Loader';
import Main from './components/Main';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Features from './pages/Features';
import Screens from './pages/Screens';
import Technology from './pages/Technology';
import Designs from './pages/Designs';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(
              resolve => { img.onload = img.onerror = resolve; }
          ))).then(() => {
              setLoading(false);
          });

  },[]);

  return(
    <div className='App'>
      <Preloader />
      <Loader isLoading={loading} />
      
      <Main isLoading={loading}>
        <NavigationBar />
        <Home />
        <Features/>
        <Screens />
        <Technology />
        <Designs />
      </Main>
      
    </div>
  )
}

export default App;

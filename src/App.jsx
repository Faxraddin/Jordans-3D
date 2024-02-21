import React from 'react';

import CanvasContainer from './Canvas';
import Header from './sections/Header';
import About from './sections/About';
import Hero from './sections/Hero';
import BuyNow from './sections/BuyNow';

function App() {
  return (
      <main className="overflow-x-hidden">
        <div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
				  <CanvasContainer />
			  </div>
       <Header/>
       <Hero/>
       <About/>
       <BuyNow/>
      </main>
  )
}

export default App

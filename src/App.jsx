import React from 'react';
import './App.css';

import CanvasContainer from './Canvas';

function App() {
  return (
      <main className="overflow-x-hidden">
        <div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
				  <CanvasContainer />
			  </div>
      </main>
  )
}

export default App

import React from 'react';
import { ProjectAvailabilityBar } from './ProjectAvailabilityBar';

function App() {
  return (
    <div className="App bg-gray-100 flex content-center p-20 w-screen h-screen">
      <div className="container mx-auto bg-white border-2 border-gray-200 rounded-3xl p-5 h-auto shadow-2xl">
        Kana
        <ProjectAvailabilityBar></ProjectAvailabilityBar>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { ProjectAvailabilityBar } from './ProjectAvailabilityBar';
import generateDataset, {  } from './datasetGenerator/datasetGenerator';
import { sampleScenarioA } from './datasetGenerator/sampleEventTemplates';

function App() {
  generateDataset(sampleScenarioA);

  return (
    <div className="App bg-gray-100 flex flex-col items-center content-center p-20 w-screen min-h-screen">
        <div className='flex justify-end w-full text-gray-400 font-medium'>
          Uptime over the past 24 hours.
        </div>
      <div className="container mx-auto bg-white border border-gray-200 rounded-xl h-auto shadow-2xl">
        <ProjectAvailabilityBar projectName="Project A"></ProjectAvailabilityBar>
        <ProjectAvailabilityBar projectName="Project B"></ProjectAvailabilityBar>
        <ProjectAvailabilityBar projectName="Project C"></ProjectAvailabilityBar>
        <ProjectAvailabilityBar projectName="Project D"></ProjectAvailabilityBar>
      </div>
    </div>
  );
}

export default App;

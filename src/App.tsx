import React from 'react';
import { ProjectAvailabilityBar } from './ProjectAvailabilityBar';
import { generateDataset } from './datasetGenerator/datasetGenerator';
import { sampleScenarioA, sampleScenarioB, sampleScenarioC, sampleScenarioD } from './datasetGenerator/sampleEventTemplates';

function App() {
  return (
    <div className="App bg-gray-100 flex flex-col items-center content-center p-20 w-screen min-h-screen">
        <div className='flex justify-end w-full text-gray-400 font-medium'>
          Uptime over the past 24 hours.
        </div>
      <div className="container mx-auto bg-white border border-gray-200 rounded-xl h-auto shadow-2xl">
        <ProjectAvailabilityBar projectName="Project A" dataset={generateDataset(sampleScenarioA)}></ProjectAvailabilityBar>
        <ProjectAvailabilityBar projectName="Project B" dataset={generateDataset(sampleScenarioB)}></ProjectAvailabilityBar>
        <ProjectAvailabilityBar projectName="Project C" dataset={generateDataset(sampleScenarioC)}></ProjectAvailabilityBar>
        <ProjectAvailabilityBar projectName="Project D" dataset={generateDataset(sampleScenarioD)}></ProjectAvailabilityBar>
      </div>
    </div>
  );
}

export default App;

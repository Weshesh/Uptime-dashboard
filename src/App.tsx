import React from 'react';
import { ProjectAvailabilityDashboard } from './ProjectAvailabilityDashboard/ProjectAvailabilityDashboard';
import { generateDataset } from './datasetGenerator/datasetGenerator';
import { sampleScenarioA, sampleScenarioB, sampleScenarioC, sampleScenarioD } from './datasetGenerator/sampleEventTemplates';

function App() {
  return (
    <div className="App bg-gray-100 flex flex-col items-center content-center p-20 w-screen min-h-screen">
        <div className='flex justify-end w-full text-gray-400 font-medium'>
          Uptime over the past 24 hours.
        </div>
      <div className="container mx-auto bg-white border border-gray-200 rounded-xl h-auto shadow-2xl">
        <ProjectAvailabilityDashboard projectName="Project A" dataset={generateDataset(sampleScenarioA)} />
        <ProjectAvailabilityDashboard projectName="Project B" dataset={generateDataset(sampleScenarioB)} />
        <ProjectAvailabilityDashboard projectName="Project C" dataset={generateDataset(sampleScenarioC)} />
        <ProjectAvailabilityDashboard projectName="Project D" dataset={generateDataset(sampleScenarioD)} />
      </div>
    </div>
  );
}

export default App;

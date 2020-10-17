import React from 'react';
import { ProjectAvailabilityBar } from './ProjectAvailabilityBar';
import generateDataset, {  } from './datasetGenerator/datasetGenerator';
import { sampleScenarioA } from './datasetGenerator/sampleEventTemplates';

function App() {
  generateDataset(sampleScenarioA);

  return (
    <div className="App bg-gray-100 flex content-center p-20 w-screen min-h-screen">
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

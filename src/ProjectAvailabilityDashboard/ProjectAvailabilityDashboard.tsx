import React from 'react';
import { Dataset, Minute } from '../datasetGenerator/datasetGenerator';
import { Bar } from './DashboardBar';

export function ProjectAvailabilityDashboard(props: { projectName: string, dataset: Dataset }) {

  function splitDataset(startingMinute: number, endingMinute: number) {
    let splitDataset: Minute[] = [];
    for (let i = startingMinute; i < endingMinute; i++) {
      splitDataset.push(props.dataset.data[i]);
    }
    return splitDataset
  }

  function generateBarDataset() {
    let datasets: Minute[][] = []
    for (let i = 0; i < 48; i++) {
      const start = i * 30;
      const end = (i + 1) * 30;
      datasets.push(splitDataset(start, end));
    }
    return datasets
  }


  const barDatasets = generateBarDataset();

  function checkCurrentState() {
    const lastBar = barDatasets[barDatasets.length - 1];
    return lastBar[lastBar.length - 1].state;
  }

  const currentState = checkCurrentState();

  function currentStateStyle() {
    if (currentState === 'unavailable') {
      return 'text-red-500'
    } else if (currentState === 'partially-unavailable') {
      return 'text-yellow-500'
    }
    return 'text-green-400'
  }

  return (
    <div className='w-full border-b px-6 py-8'>
      <div className='flex justify-between'>
        <h2 className='text-gray-600 font-medium'>
          {props.projectName}
        </h2>
        <span className={`font-medium ${currentStateStyle()}`}>
          {currentState.charAt(0).toUpperCase() + currentState.slice(1)}
        </span>
      </div>
      <div className='flex justify-between my-3 w-full'>
        {barDatasets.map((e, index) => (
          <Bar key={e[e.length - 1].time.toString() + index} data={e} />
        ))}
      </div>

      <div className='relative flex justify-center'>
        <div className='flex justify-start text-gray-300 font-medium whitespace-no-wrap'>24 hours ago</div>
        <div className='relative flex items-center mx-5 w-full' >
          <hr className='w-full' />
        </div>
        <div className='flex justify-end text-gray-300 font-medium'>Today</div>

        <div className='absolute px-5 text-gray-500 font-medium bg-white'>{props.dataset.availability} Availability</div>
      </div>

    </div>
  )
}

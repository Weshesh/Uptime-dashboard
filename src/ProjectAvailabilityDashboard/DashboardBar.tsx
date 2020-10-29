import React from 'react';
import { Minute } from '../datasetGenerator/datasetGenerator';

export function Bar(props: { data: Minute[] }) {
  const dominantState = checkDominantState();

  function checkDominantState(): string {
    let state = 'available';
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].state === 'unavailable') {
        state = 'unavailable';
        break;
      } else if (props.data[i].state === 'partially-unavailable') {
        state = 'partially-unavailable'
      }
    }
    return state
  }

  function setBarColor(dominantState: string) {
    if (dominantState === 'unavailable') {
      return 'bg-red-500'
    } else if (dominantState === 'partially-unavailable') {
      return 'bg-yellow-500'
    }
    return 'bg-green-400'
  }

  return (
    <div className={`w-3 h-12 rounded-sm shadow ${setBarColor(dominantState)}`} />
  )
}

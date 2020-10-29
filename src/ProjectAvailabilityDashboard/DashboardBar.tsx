import React from 'react';
import { Minute } from '../datasetGenerator/datasetGenerator';

function checkDominantState(): string {

  return ''
}

function setBarColor(dominantState: string) {
  if (dominantState === 'unavailable') {
    return 'bg-green-500'
  } else if (dominantState === 'unavailable') {
    return 'bg-green-500'
  }
  return 'bg-green-400'
}

export function Bar(props: {data: Minute[]}) {


  const dominantState = checkDominantState();


  return (
    <div className={`w-3 h-12 rounded-sm shadow ${setBarColor(dominantState)}`}/>
  )
}

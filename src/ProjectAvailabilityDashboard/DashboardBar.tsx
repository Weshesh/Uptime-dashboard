import React from 'react';
import Tooltip from '../common-components/Tooltip';

import { Minute } from '../datasetGenerator/datasetGenerator';

export function Bar(props: { data: Minute[] }) {
  const dominantState = checkDominantState();

  function checkDominantState(): string {
    let state = 'available';
    for (let i = 0; i < props.data.length; i++) {
      const n = (i > 0) ? (i - 1) : 0;
      if (props.data[i].state === 'unavailable' && props.data[n].state === 'available' && props.data[n].state !== 'unavailable' && i !== 0) {
        state = 'partially-unavailable';
        break
      } 
      else if (props.data[i].state === 'unavailable') {
        state = 'unavailable';
      } 
      else if (props.data[i].state === 'partially-unavailable') {
        state = 'partially-unavailable'
        break
      } else if (state !== 'available' && props.data[i].state === 'available' ) {
        state = 'partially-unavailable'
        break
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
    <Tooltip placement='top' tooltip='Hi there!' hideArrow={false} data={props.data}>
      <div className={`w-3 h-12 rounded-sm shadow ${setBarColor(dominantState)}`} />
    </Tooltip>
  )
}

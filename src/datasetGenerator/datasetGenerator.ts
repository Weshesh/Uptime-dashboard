import { ScenarioEvent } from "./sampleEventTemplates";
import DateTimeGroup from './DateTimeGroup';

export interface Minute {
  time: DateTimeGroup,
  state: string,
}
export interface Dataset {
  availability: string,
  data: Minute[]
}

function getState(minute: number, inputScenario: ScenarioEvent[]): string {
  let state = 'available';
  for(let i = 0; i < inputScenario.length; i++) {
    if (minute >= inputScenario[i].startMinute && minute <= inputScenario[i].endMinute) {
      state = inputScenario[i].status
      break
    }
    else {
      state = 'available';
    }
  };
  return state
}

export function generateDataset(inputScenario: ScenarioEvent[]) {
  let dataset: Dataset = {availability: '0', data: [] };
  let availability = 0;
  for (let currentMinute = 0; currentMinute < 1440; currentMinute++) {
    const obj: Minute = {
      time: new DateTimeGroup(currentMinute),
      state: getState(currentMinute, inputScenario)
    }
    if (obj.state === 'available') {
      availability += 1;
    }
    dataset.data.push(obj);
  }
  const availabilityPercentage = (availability / 1440 * 100).toFixed(2);
  dataset.availability = `${availabilityPercentage}%`;
  console.log(availability);
  console.log(dataset);
  return dataset
}

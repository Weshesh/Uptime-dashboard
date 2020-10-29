import { ScenarioEvent } from "./sampleEventTemplates";
import DateTimeGroup from './DateTimeGroup';

interface Minute {
  time: DateTimeGroup,
  state: string,
}
interface Dataset {
  availability: string,
  data: Minute[]
}

function getState(minute: number, inputScenario: ScenarioEvent[]): string {
  let state = 'available'
  inputScenario.forEach(element => {
    if (element.startMinute < minute && element.endMinute) {
      state = element.status
    }
  });
  return state
}

function generateDataset(inputScenario: ScenarioEvent[]) {
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
  const availabilityPercentage = (1440 / availability).toFixed(2);
  dataset.availability = `${availabilityPercentage}%`;
  console.log(dataset);
  return dataset
}

export default generateDataset;

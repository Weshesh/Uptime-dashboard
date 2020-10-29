import { ScenarioEvent } from "./sampleEventTemplates";
import DateTimeGroup from './DateTimeGroup';

interface Minute {
  time: DateTimeGroup,
  state: string
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
  let dataset: Minute[] = []

  for (let currentMinute = 0; currentMinute < 1440; currentMinute++) {
    const obj: Minute = {
      time: new DateTimeGroup(currentMinute),
      state: getState(currentMinute, inputScenario)
    }
    dataset.push(obj);
  }
  console.log(dataset);
  return dataset
}

export default generateDataset;

import { ScenarioEvent } from "./sampleEventTemplates";

interface Minute {
  time: string,
  state: string
}

function generateDTGDate() {
  const date = new Date();
  let year = date.getFullYear().toString();
  year = year[2] + year[3]; 
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const dtgDate = 'Z/' + day + month + year; 
  return dtgDate
}

function generateHour(currentHourValue: number): string {
  const inputHour = currentHourValue.toString();
  if (inputHour.length < 2) {
    return '0' + inputHour
  }
  return inputHour
}

function generateMinute(currentMinuteValue: number): string {
  const inputMinute = currentMinuteValue > 59
    ? (currentMinuteValue % 60).toString()
    : currentMinuteValue.toString();
  if (inputMinute.length < 2) {
    return '0' + inputMinute
  }
  return inputMinute
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

  const dateSuffix = generateDTGDate();

  let dataset: Minute[] = []
  let hour = 0;

  for (let minute = 0; minute < 1440; minute++) {
    if (minute % 60 === 0 && minute !== 0) {
      hour++
    }
    let timePrefix =  generateHour(hour) + ':' + generateMinute(minute) + ':00'; 
    let obj: Minute = {
      time: timePrefix + dateSuffix,
      state: getState(minute, inputScenario)
    }
    dataset.push(obj);
  }
  console.log(dataset);
  return dataset
}

export default generateDataset;

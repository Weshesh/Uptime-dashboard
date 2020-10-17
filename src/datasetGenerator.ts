interface minute {
  time: string,
  state?: 'available' | 'unavailable'
}

// HH:mm:ss[Z]/DDMMMYY 1440min

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
  let outputHour = '';
  if (inputHour.length < 2) {
    outputHour = '0' + inputHour;
    return outputHour
  }
  return inputHour
}

function generateMinute(currentMinuteValue: number): string {
  const inputMinute = currentMinuteValue > 59
    ? (currentMinuteValue % 60).toString()
    : currentMinuteValue.toString();
  let outputMinute = '';
  if (inputMinute.length < 2) {
    outputMinute = '0' + inputMinute;
    return outputMinute
  }
  return inputMinute
}

function generateDataset() {

  const dateSuffix = generateDTGDate();

  let dataset: minute[] = []
  let hour = 0;

  for (let minute = 0; minute < 1440; minute++) {
    if (minute % 60 === 0 && minute !== 0) {
      hour++
    }
    let timePrefix =  generateHour(hour) + ':' + generateMinute(minute) + ':00'; 
    let time = timePrefix + dateSuffix
    let obj: minute = {
      time: time
    }
    dataset.push(obj);
  }
  console.log(dataset);
  return dataset
}

export default generateDataset;

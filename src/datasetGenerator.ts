interface minute {
  time: number,
  state?: 'available' | 'unavailable'
}

// HH:mm:ss[Z]/DDMMMYY

function generateDTGDate() {
  const date = new Date;
  let year = date.getFullYear().toString();
  year = year[2] + year[3]; 
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const dtgDate = 'Z/' + day + month + year; 
  return dtgDate
}

function generateDataset() {


  console.log(generateDTGDate());

  const startDate = new Date()
  let dataset: minute[] = []

  return dataset
}

export default generateDataset;

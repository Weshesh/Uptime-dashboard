interface minute {
  time: Date ,
  state: 'available' | 'unavailable'
}

function generateDataset() {

  let generatedDataset: minute[] = []

  for(let i = 0; i < 1440; i++) {
    const N = (Math.random() % 2) ? 'available' : 'unavailable';
    console.log(N);
  }



  return generatedDataset
}

export default generateDataset;

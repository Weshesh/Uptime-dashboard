interface minute {
  time: number,
  state: 'available' | 'unavailable'
}

function generateDataset() {
  const startDate = new Date()
  let dataset: minute[] = []
  return dataset
}

export default generateDataset;

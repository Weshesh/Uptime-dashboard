export interface ScenarioEvent {
  startMinute: number,
  endMinute: number,
  status: 'available' | 'partially-unavailable' | 'unavailable'
}

export const sampleScenarioA: ScenarioEvent[] = [
  {
    startMinute: 0,
    endMinute: 29,
    status: 'partially-unavailable'
  },
  {
    startMinute: 30,
    endMinute: 31,
    status: 'unavailable'
  },
  {
    startMinute: 250,
    endMinute: 300,
    status: 'unavailable'
  },
  {
    startMinute: 301,
    endMinute: 750,
    status: 'partially-unavailable'
  },
  {
    startMinute: 1100,
    endMinute: 1110,
    status: 'partially-unavailable'
  },
  {
    startMinute: 1200,
    endMinute: 1210,
    status: 'unavailable'
  }
]

export const sampleScenarioB: ScenarioEvent[] =[
  {
    startMinute: 28,
    endMinute: 29,
    status: 'unavailable'
  },
  {
    startMinute: 30,
    endMinute: 31,
    status: 'unavailable'
  },
  {
    startMinute: 151,
    endMinute: 300,
    status: 'unavailable'
  },
  {
    startMinute: 1100,
    endMinute: 1110,
    status: 'partially-unavailable'
  },
  {
    startMinute: 1200,
    endMinute: 1210,
    status: 'unavailable'
  }
]

export const sampleScenarioC: ScenarioEvent[] = [
  {
    startMinute: 110,
    endMinute: 250,
    status: 'partially-unavailable'
  },
  {
    startMinute: 251,
    endMinute: 300,
    status: 'unavailable'
  },
  {
    startMinute: 301,
    endMinute: 750,
    status: 'partially-unavailable'
  },
  {
    startMinute: 900,
    endMinute: 1110,
    status: 'unavailable'
  },
  {
    startMinute: 1200,
    endMinute: 1439,
    status: 'partially-unavailable'
  }
]

export const sampleScenarioD: ScenarioEvent[] = [
  {
    startMinute: 50,
    endMinute: 800,
    status: 'unavailable'
  },
  {
    startMinute: 1100,
    endMinute: 1439,
    status: 'unavailable'
  },
]

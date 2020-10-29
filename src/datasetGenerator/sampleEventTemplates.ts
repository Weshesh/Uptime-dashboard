export interface ScenarioEvent {
  startMinute: number,
  endMinute: number,
  status: 'available' | 'partially-unavailable' | 'unavailable'
}

export const sampleScenarioA: ScenarioEvent[] = [
  {
    startMinute: 110,
    endMinute: 250,
    status: 'partially-unavailable'
  },
  {
    startMinute: 250,
    endMinute: 300,
    status: 'unavailable'
  },
  {
    startMinute: 300,
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
    startMinute: 110,
    endMinute: 250,
    status: 'partially-unavailable'
  },
  {
    startMinute: 250,
    endMinute: 300,
    status: 'unavailable'
  },
  {
    startMinute: 300,
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

export const sampleScenarioC: ScenarioEvent[] = [
  {
    startMinute: 110,
    endMinute: 250,
    status: 'partially-unavailable'
  },
  {
    startMinute: 250,
    endMinute: 300,
    status: 'unavailable'
  },
  {
    startMinute: 300,
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

export const sampleScenarioD: ScenarioEvent[] = [
  {
    startMinute: 50,
    endMinute: 800,
    status: 'unavailable'
  },
  {
    startMinute: 1100,
    endMinute: 1440,
    status: 'unavailable'
  },
]

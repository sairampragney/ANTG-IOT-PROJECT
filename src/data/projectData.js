export const projectData = {
  mode: 'demo',
  occupancy: { status: 'Occupied', count: 24 },
  dashboard: { utilization: '58%', updated: 'Just now' },
  hardware: { device: 'Arduino Uno', status: 'Demo / Simulated' },
  prediction: { result: 'Occupied', model: 'Demo Model', confidence: null },
  sensors: [
    { label: 'Sensor Reading', value: 'Demo Value', status: 'Simulated' },
    { label: 'Sensor Reading', value: 'Demo Value', status: 'Simulated' },
    { label: 'Sensor Reading', value: 'Demo Value', status: 'Simulated' },
  ],
  comparisonModels: ['Model A', 'Model B', 'Model C'],
  history: [
    { time: '09:00', occupancy: 18 },
    { time: '09:30', occupancy: 22 },
    { time: '10:00', occupancy: 24 },
    { time: '10:30', occupancy: 21 },
    { time: '11:00', occupancy: 24 },
    { time: '11:30', occupancy: 23 },
  ],
}

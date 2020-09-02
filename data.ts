const jobs = [
  { id: '0', label: 'Lärare', salary: 27000 },
  { id: '1', label: 'Programmerare', salary: 30000 },
  { id: '2', label: 'Kassabiträde', salary: 25000 },
]

const cities: {
  value: string
  label: string
  years: { [key: string]: number }
}[] = [
  { value: '0', label: 'Stockholm', years: { '0': 0.3, '1': 0.29 } },
  { value: '1', label: 'Göteborg', years: { '0': 0.25, '1': 0.22 } },
]

const years = [
  { value: '0', label: '2019' },
  { value: '1', label: '2020' },
]

export { jobs, cities, years }

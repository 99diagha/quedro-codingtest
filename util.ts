const expBrackets = [
  { lower: 0, upper: 3, rate: 1 },
  { lower: 4, upper: 7, rate: 1.2 },
  { lower: 8, upper: 10, rate: 1.4 },
  { lower: 11, upper: Infinity, rate: 1.6 },
]

const calcSalaryBasedOnExp = (salary: number, exp: number) => {
  const index = expBrackets.findIndex(
    (bracket) => exp >= bracket.lower && exp <= bracket.upper,
  )
  return salary * expBrackets[index].rate
}

const taxBands = [
  { lower: 0, upper: 36000, rate: 0 },
  { lower: 36001, upper: 45000, rate: 0.5 },
  { lower: 45001, upper: Infinity, rate: 0.7 },
]

const calcTaxes = (salary = 0, baseTax = 0) => {
  taxBands[0].rate = baseTax

  return taxBands.reduce((acc, band) => {
    if (salary > band.lower) {
      const taxableAtThisRate = Math.min(
        band.upper - band.lower,
        salary - band.lower,
      )

      const taxThisBand = taxableAtThisRate * band.rate
      acc += taxThisBand
    }
    return acc
  }, 0)
}

const calcSalaryAfterTaxes = (salary: number, taxToBePaid: number) => {
  return salary - taxToBePaid
}

const formatCurrency = (price: Number): string => {
  return price.toLocaleString('sv-SE', {
    minimumFractionDigits: 0,
  })
}

export { calcSalaryBasedOnExp, calcTaxes, calcSalaryAfterTaxes, formatCurrency }

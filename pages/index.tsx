import Head from 'next/head'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Input from 'components/Input'
import RadioGroup from 'components/RadioGroup'
import RadioButton from 'components/RadioButton'
import Select from 'components/Select'
import { jobs, cities, years } from 'data'
import {
  calcSalaryBasedOnExp,
  calcTaxes,
  calcSalaryAfterTaxes,
  formatCurrency,
} from '../util'

type FormData = {
  experience: string
  job: string
  city: string
  year: string
}

export default function Home() {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: { experience: '0', job: '0' },
  })
  const [salaryBeforeTax, setSalaryBeforeTax] = useState(0)
  const [salary, setSalary] = useState(0)

  const onSubmit = (data: FormData) => {
    const job = jobs.findIndex((job) => job.id === data.job)
    const baseSalary = jobs[job].salary
    const experience = Number(data.experience)
    const city = cities.findIndex((city) => city.value === data.city)
    const salaryYearTax = cities[city].years[data.year]

    const salaryExp = calcSalaryBasedOnExp(baseSalary, experience)
    const taxToBePaid = calcTaxes(salaryExp, salaryYearTax)

    setSalaryBeforeTax(salaryExp)
    setSalary(calcSalaryAfterTaxes(salaryExp, taxToBePaid))
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Head>
        <title>Quedros lönekalkylator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 flex justify-center p-6 items-center bg-gray-200">
        <img
          src="/images/savings.svg"
          alt="illustration"
          className="w-full max-w-lg"
        />
      </div>
      <div className="flex-1 p-6 lg:p-8">
        <form className="max-w-lg space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl text-blue-600 font-bold">
            Quedros lönekalkylator
          </h1>

          <Input label="Erfarenhet" id="12" name="experience" ref={register} />

          <RadioGroup label="Yrke" name="job" ref={register}>
            {jobs.map((job) => (
              <RadioButton
                id={job.id}
                value={job.id}
                label={job.label}
                key={job.id}
              />
            ))}
          </RadioGroup>
          <Select label="Ort" name="city" options={cities} ref={register} />
          <Select
            label="Inkomstår"
            name="year"
            options={years}
            ref={register}
          />
          <button
            data-testid="submitBtn"
            className="py-2 px-4 border-2 border-gray-900 rounded bg-gray-900 text-white font-bold hover:bg-white hover:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            Beräkna lön
          </button>
          {salary > 0 && (
            <div className="flex">
              <div className="flex-1 p-3 bg-gray-300 text-center">
                <p className="text-xl font-black">Arbetsgivaren betalar</p>
                <p className="text-3xl font-black">
                  {formatCurrency(salaryBeforeTax)}
                </p>
                <p>kr / månad</p>
              </div>
              <div className="flex-1 p-3 bg-green-300 text-center">
                <p className="text-xl font-black">I din plånbok</p>
                <p className="text-3xl font-black">{formatCurrency(salary)}</p>
                <p>kr / månad</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

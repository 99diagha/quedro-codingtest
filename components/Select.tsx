import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

type Option = {
  label: ReactNode
  value: string | number
}

type Props = ComponentPropsWithoutRef<'select'> & {
  label: string
  options: Option[]
}

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ label, name, options }, ref) => {
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={name} className="text-xl font-bold">
          {label}
        </label>
        <select
          name={name}
          id={name}
          ref={ref}
          className="select focus:outline-none focus:shadow-outline"
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  },
)

export default Select

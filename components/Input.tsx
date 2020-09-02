import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

type Props = ComponentPropsWithoutRef<'input'> & {
  label: ReactNode
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, name, id }, ref) => {
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={id} className="text-xl font-bold">
          {label}
        </label>
        <input
          id={id}
          type="number"
          name={name}
          className="h-10 py-1 px-3 border rounded shadow-sm text-lg focus:outline-none focus:shadow-outline"
          ref={ref}
        />
      </div>
    )
  },
)

export default Input

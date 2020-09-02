import { createContext, forwardRef, ReactNode } from 'react'

type ContextState = {
  name: string
  ref: any
}

type Props = ContextState & {
  label: string
  children: ReactNode
}

export const RadioGroupContext = createContext({} as ContextState)

const RadioGroup = forwardRef<HTMLInputElement, Props>(
  ({ label, name, children }, ref) => {
    return (
      <div className="space-y-3" role="radiogroup" aria-label={label}>
        <h2 className="text-xl font-bold">{label}</h2>
        <RadioGroupContext.Provider value={{ name, ref }}>
          {children}
        </RadioGroupContext.Provider>
      </div>
    )
  },
)

export default RadioGroup

import { ComponentPropsWithoutRef, ReactNode, useContext } from 'react'

import { RadioGroupContext } from './RadioGroup'

type Props = ComponentPropsWithoutRef<'input'> & {
  label: ReactNode
}

const RadioButton = ({ id, value, label }: Props) => {
  const radioGroup = useContext(RadioGroupContext)

  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={id}
        name={radioGroup.name}
        value={value}
        ref={radioGroup.ref}
        className="radio-button focus:outline-none focus:shadow-outline"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton

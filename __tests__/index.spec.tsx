import { render, fireEvent, act } from '@testing-library/react'

import Home from 'pages/index'

// simple test

test('renders home heading', () => {
  const { getByText } = render(<Home />)

  expect(getByText('Quedros lönekalkylator')).toBeInTheDocument()
})

test('renders form', () => {
  const { getByText, getByLabelText } = render(<Home />)

  expect(getByLabelText('Erfarenhet')).toBeInTheDocument()
  expect(getByText('Yrke')).toBeInTheDocument()
  expect(getByLabelText('Ort')).toBeInTheDocument()
  expect(getByLabelText('Inkomstår')).toBeInTheDocument()
})

test('if submit button works', async () => {
  const { getByText, getByTestId } = render(<Home />)

  await act(async () => {
    fireEvent.click(getByTestId('submitBtn'))
  })

  expect(getByText('Arbetsgivaren betalar')).toBeInTheDocument()
  expect(getByText('I din plånbok')).toBeInTheDocument()
})

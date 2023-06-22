import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import ButtonBase from '../components/button/button-base'
import Button, { sizesMapper, variantsMapper } from '../components/button/button'

describe('Button Base', () => {
  const buttonTitle = 'Button Test'
  let Button: HTMLElement
  const onClickHandler = jest.fn()

  beforeEach(() => {
    cleanup()
    render(<ButtonBase title={buttonTitle} onClick={onClickHandler} />)
    Button = screen.getByRole('button')
  })

  test('Check if the button is rendered', () => {
    expect(Button).toBeInTheDocument()
  })

  test('Check if the button has the correct title', () => {
    expect(Button).toHaveTextContent(buttonTitle)
  })

  test('Check if the onClickHandler is called', () => {
    expect(onClickHandler).not.toHaveBeenCalled()
    fireEvent.click(Button)
    expect(onClickHandler).toHaveBeenCalled()
  })
})

describe('Button', () => {
  const variantMatchers = {
    primary: /button_primary/i,
    secondary: /button_secondary/i,
    success: /button_success/i,
    error: /button_error/i,
  }
  const sizeMatchers = {
    small: /button_small/i,
    medium: /button_medium/i,
    large: /button_large/i,
  }

  const onClickHandler = jest.fn()
  const buttonTitle = 'Button Test'
  beforeEach(() => {
    cleanup()
  })

  test('Check Button Variants Mapper', () => {
    expect(variantsMapper['primary']).toMatch(variantMatchers['primary'])
    expect(variantsMapper['secondary']).toMatch(variantMatchers['secondary'])
    expect(variantsMapper['success']).toMatch(variantMatchers['success'])
    expect(variantsMapper['error']).toMatch(variantMatchers['error'])
  })

  test('Check Button Sizes Mapper', () => {
    expect(sizesMapper['small']).toMatch(sizeMatchers['small'])
    expect(sizesMapper['medium']).toMatch(sizeMatchers['medium'])
    expect(sizesMapper['large']).toMatch(sizeMatchers['large'])
  })

  test('Check if the onClickHandler is called and the Button has the correct title', () => {
    render(<Button variant='primary' title={buttonTitle} onClick={onClickHandler} />)
    expect(screen.getByRole('button')).toHaveTextContent(buttonTitle)
    expect(onClickHandler).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole('button'))
    expect(onClickHandler).toHaveBeenCalled()
  })

  test('Check if the Button is rendered with the correct css class (className) variant = "primary"', () => {
    render(<Button variant='primary' title={buttonTitle} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(variantsMapper['primary'])
    expect(button).toHaveClass(sizesMapper['medium'])
  })

  test('Check if the Button is rendered with the correct css class (className) variant = "secondary"', () => {
    render(<Button variant='secondary' title={buttonTitle} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(variantsMapper['secondary'])
  })
})

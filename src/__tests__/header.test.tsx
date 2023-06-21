import { screen, render, cleanup, within } from '@testing-library/react'
import Header from '../components/header/header'

describe('Header', () => {
  let header: HTMLElement
  beforeEach(() => {
    cleanup()
    render(<Header />)
    header = screen.getByRole('banner', { name: /Header/i })
  })

  test('Check render Header', () => {
    expect(header).toBeInTheDocument()
  })

  test('Check render Logo Inside Header', () => {
    const logo = within(header).getByRole('img', { name: /Pichincha Bank Logo/i })
    expect(logo).toBeInTheDocument()
  })
})

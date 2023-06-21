import { render, screen, cleanup } from '@testing-library/react'
import Logo from '../components/logo/logo'

describe('Logo', () => {
  const logoLabelMatcher = /Pichincha Bank Logo/i
  beforeEach(() => {
    cleanup()
  })

  test('Check render Logo without isFullLogo prop', () => {
    render(<Logo />)

    const logo = screen.getByRole('img', { name: logoLabelMatcher })
    expect(logo).toBeInTheDocument()
  })

  test('Check render Logo with isFUllLogo = false', () => {
    render(<Logo isFullLogo={false} />)

    const logo = screen.getByRole('img', { name: logoLabelMatcher })
    expect(logo).toBeInTheDocument()
  })

  test('Check render Logo with isFUllLogo = true', () => {
    render(<Logo isFullLogo={true} />)

    const logo = screen.getByRole('img', { name: logoLabelMatcher })
    expect(logo).toBeInTheDocument()
  })
})

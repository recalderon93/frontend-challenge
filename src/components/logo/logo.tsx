import bankLogo from '../../images/Logo.svg'
import bankFullLogo from '../../images/LogoFull.svg'

type Props = {
  isFullLogo?: boolean
  height?: number
}

export default function Logo({ isFullLogo = false, height = 40 }: Props) {
  return (
    <img
      role='img'
      src={isFullLogo ? bankFullLogo : bankLogo}
      aria-label='Pichincha Bank Logo'
      height={height}
    />
  )
}

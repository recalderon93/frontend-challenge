import { ComponentProps } from 'react'
import ButtonBase from './button-base'
import styles from '../../styles/buttons.module.scss'

export type ButtonVariants = 'primary' | 'secondary' | 'success' | 'error'

export type ButtonSize = 'small' | 'medium' | 'large'

type Props = {
  variant: ButtonVariants
  size?: ButtonSize
  title: string
} & ComponentProps<'button'>

export const variantsMapper: Record<ButtonVariants, string> = {
  primary: styles.button_primary,
  secondary: styles.button_secondary,
  success: styles.button_success,
  error: styles.button_error,
}

export const sizesMapper: Record<'small' | 'medium' | 'large', string> = {
  small: styles.button_small,
  medium: styles.button_medium,
  large: styles.button_large,
}

export default function Button({ className, variant, size = 'medium', ...props }: Props) {
  return (
    <ButtonBase
      className={`${variantsMapper[variant]} ${sizesMapper[size]} ${className}`}
      {...props}
    />
  )
}

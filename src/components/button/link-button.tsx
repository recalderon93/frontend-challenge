import { Link, LinkProps } from 'react-router-dom';
import styles from '../../styles/buttons.module.scss';
import { variantsMapper, sizesMapper, ButtonVariants, ButtonSize } from './button';

type Props = {
  variant: ButtonVariants;
  size?: ButtonSize;
} & LinkProps;

export default function LinkButton({ variant, size = 'medium', ...props }: Props) {
  return (
    <Link
      className={`${styles.button_base} ${variantsMapper[variant]} ${sizesMapper[size]}`}
      {...props}
    >
      {props.title}
    </Link>
  );
}

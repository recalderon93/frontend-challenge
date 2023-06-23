import { ComponentProps } from 'react';
import styles from '../../styles/buttons.module.scss';

type Props = { title: string } & ComponentProps<'button'>

export default function ButtonBase({ className, title, ...props }: Props) {
  return (
    <button className={`${styles.button_base} ${className}`} {...props}>
      {title}
    </button>
  );
}

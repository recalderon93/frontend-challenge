import { Link } from 'react-router-dom';
import styles from '../../../styles/dropdown-menu.module.scss';

type Props = {
  caption: string;
  icon?: string | null;
  href: string;
  onClick?: () => void;
};

export default function DropdownMenuItem({ caption, href, icon = null, onClick }: Props) {
  if (onClick) {
    return (
      <div role='menuitem' className={styles.item} onClick={onClick}>
        <a>
          {icon && <img src={icon} alt={`${caption}-icon`} />}
          {caption}
        </a>
      </div>
    );
  }
  return (
    <div role='menuitem' className={styles.item} onClick={onClick}>
      <Link to={href}>
        {icon && <img src={icon} alt={`${caption}-icon`} />}
        {caption}
      </Link>
    </div>
  );
}

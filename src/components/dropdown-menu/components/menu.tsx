import DropdownMenuItem from './item';
import styles from '../../../styles/dropdown-menu.module.scss';

type Props = {
  options: MenuItem[];
};

export default function DropdownMenuItemsWrapper({ options }: Props) {
  return (
    <div role='menu' className={styles.items_wrapper}>
      {options.map((option) => (
        <DropdownMenuItem key={option.caption} {...option} />
      ))}
    </div>
  );
}

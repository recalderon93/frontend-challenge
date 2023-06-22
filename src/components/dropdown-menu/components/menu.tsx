import DropdownMenuItem from './item'
import styles from '../../../styles/dropdown-menu.module.scss'

export type MenuItem = {
  icon?: string
  caption: string
  href: string
}

type Props = {
  options: MenuItem[]
}

export default function DropdownMenuItemsWrapper({ options }: Props) {
  return (
    <div role='menu' className={styles.items_wrapper}>
      {options.map((option) => (
        <DropdownMenuItem
          key={option.caption}
          href={option.href}
          caption={option.caption}
          icon={option.icon}
        />
      ))}
    </div>
  )
}

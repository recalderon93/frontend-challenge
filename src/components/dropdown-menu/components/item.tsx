import styles from '../../../styles/dropdown-menu.module.scss'

type Props = {
  caption: string
  icon?: string | null
  href: string
}

export default function DropdownMenuItem({ caption, href, icon = null }: Props) {
  return (
    <div role='menuitem' className={styles.item}>
      <a href={href}>
        {icon && <img src={icon} alt={`${caption}-icon`} />}
        {caption}
      </a>
    </div>
  )
}

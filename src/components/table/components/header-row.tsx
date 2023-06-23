import styles from '../../../styles/table.module.scss';

type Props = {
  items: string[];
};

export default function HeaderRow({ items }: Props) {
  return (
    <thead className={styles.table_header}>
      <tr>
        {items.map((item) => (
          <th key={item}>{item}</th>
        ))}
        <th></th>
      </tr>
    </thead>
  );
}

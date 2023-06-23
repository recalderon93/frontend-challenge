/* eslint-disable camelcase */
import { tableHeaders } from '../../constants';
import styles from '../../styles/table.module.scss';
import dinamicLabels from '../../utils/dinamic-label';
import HeaderRow from './components/header-row';
import ItemRow from './components/item-row';

type Props = {
  data: DataItem[];
};

export default function Table({ data }: Props) {
  const headers = tableHeaders;
  // Fill array with number from 1 to data.length
  const resultSelectionArray = Array.from({ length: data.length }, (_, index) => index + 1);

  if (data.length === 0) {
    return null;
  }

  return (
    <div className={styles.table_container}>
      <div className={styles.scrollable}>
        <table className={styles.table} cellPadding={0} cellSpacing={0}>
          <HeaderRow items={headers} />
          <tbody className={styles.table_body}>
            {data.map((item) => {
              return <ItemRow key={item.id} data={item} />;
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.table_container_footer}>
        <p aria-label='Results Count'>{`${data.length} ${dinamicLabels(
          data.length,
          'Resultado',
          'Resultados',
        )}`}</p>
        <select>
          {resultSelectionArray.map((item) => (
            <option key={`option-${item}`}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

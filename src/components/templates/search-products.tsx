/* eslint-disable camelcase */
import styles from '../../styles/templates.module.scss';
import input from '../../styles/inputs.module.scss';
import LinkButton from '../button/link-button';
import Header from '../header/header';
import Table from '../table/table';

type Props = {
  searchValue: string;
  onChangeSearchValue: (input: React.ChangeEvent<HTMLInputElement>) => void;
  data: DataItem[];
  onDeleteItem: (id: string) => void;
};

export default function SearchProducts({
  onChangeSearchValue,
  onDeleteItem,
  searchValue,
  data,
}: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.search_wrapper}>
        <input
          className={input.input_container}
          type='search'
          role='search'
          placeholder='Buscar...'
          aria-label='Seach Input'
          value={searchValue}
          onChange={onChangeSearchValue}
        />
        <LinkButton to='/add_product' variant='primary' title='Agregar' />
      </div>
      <Table data={data} onDeleteItem={onDeleteItem} />
    </div>
  );
}

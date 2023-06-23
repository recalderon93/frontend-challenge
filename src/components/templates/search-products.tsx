/* eslint-disable camelcase */
import styles from '../../styles/templates.module.scss';
import input from '../../styles/inputs.module.scss';
import Button from '../button/button';
import Header from '../header/header';
import Table from '../table/table';

type Props = {
  searchValue: string;
  onChangeSearchValue: (input: React.ChangeEvent<HTMLInputElement>) => void;
  data: DataItem[];
};

export default function SearchProducts({ onChangeSearchValue, searchValue, data }: Props) {
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
        <Button variant='primary' title='Agregar' />
      </div>
      <Table data={data} />
    </div>
  );
}

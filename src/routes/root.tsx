import { useCallback, useEffect, useState } from 'react';
import financialProductService from '../services/financial';
import SearchProducts from '../components/templates/search-products';
import { useProductContext } from '../context/products-context';

export default function Root() {
  const [searchValue, setSearchValue] = useState('');
  const { data, actions } = useProductContext();

  function onChangeValue(input: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(input.target.value);
  }

  const filterCallback = useCallback(
    (item: DataItem) => {
      const matcher = new RegExp(searchValue, 'i');
      if (searchValue === '') {
        return true;
      }

      if (item.description.match(matcher) || item.name.match(matcher)) {
        return true;
      }
      return false;
    },
    [searchValue],
  );

  return (
    <SearchProducts
      onDeleteItem={actions.removeProduct}
      searchValue={searchValue}
      onChangeSearchValue={onChangeValue}
      data={data.filter(filterCallback)}
    />
  );
}

export async function rootLoader() {
  const res = financialProductService.getProducts();
  if (res) {
    return res;
  }
  return null;
}

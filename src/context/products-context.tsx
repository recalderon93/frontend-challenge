import { createContext, useContext, useEffect, useState } from 'react';
import financialProductService from '../services/financial';
import styles from '../styles/spinner.module.scss';

type Actions = {
  createProduct: (input: DataItem) => Promise<void>;
  updateProduct: (input: DataItem) => Promise<void>;
  removeProduct: (id: string) => Promise<void>;
  verifyProductById: (id: string) => Promise<boolean>;
  getProductById: (id: string) => DataItem | null;
};

type ContextType = {
  data: DataItem[];
  actions: Actions;
};

const Context = createContext<ContextType>({ data: [] as DataItem[] } as ContextType);

type Props = React.PropsWithChildren;

export default function ProductsContextProvider({ children }: Props) {
  const [data, setData] = useState<DataItem[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      const response = await financialProductService.getProducts();
      if (!response?.error) {
        setData(response?.data || []);
      }
      setLoader(false);
    })();
  }, []);

  async function createProduct(input: DataItem) {
    try {
      setLoader(true);
      const verification = await financialProductService.verifyProductById(input.id);
      if (verification?.status === 200 && !verification.data) {
        const response = await financialProductService.createProduct(input);
        if (response?.status === 200) {
          setData((st) => [...st, input]);
        }
      }

      setLoader(false);
    } catch (e) {
      setLoader(false);
    }
  }

  async function updateProduct(input: DataItem) {
    setLoader(true);
    const response = await financialProductService.updateProduct(input);
    if (response?.status === 200) {
      setData((st) => {
        const itemIndex = st.findIndex((item) => item.id === input.id);
        if (itemIndex !== -1) {
          st[itemIndex] = input;
        }
        return st;
      });
    }
    setLoader(false);
  }

  async function removeProduct(id: string) {
    setLoader(true);
    // const response = await financialProductService.removeProduct(id);

    // if (response?.status === 200) {
      // #TODO Endpoint Error, every time I try to Delete or Update the product throw an error, "You must be the owner".
      setData((st) => {
        return st.filter((st) => st.id !== id);
      });
    // }
    setLoader(false);
  }

  async function verifyProductById(id: string) {
    const response = await financialProductService.verifyProductById(id);
    if (response?.status === 2000) {
      return response.data;
    }
    return false;
  }

  function getProductById(id: string): DataItem | null {
    const itemIndex = data.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return null;
    }

    return data[itemIndex];
  }

  const actions: Actions = {
    createProduct,
    updateProduct,
    removeProduct,
    verifyProductById,
    getProductById,
  };

  return (
    <Context.Provider value={{ data, actions }}>
      {children}
      {loader && (
        <div className={styles.backdrop}>
          <div className={styles.loader} />
        </div>
      )}
    </Context.Provider>
  );
}

export function useProductContext() {
  return useContext(Context);
}

import { createContext, useMemo, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:8080';
const UNKNOWN_MESSAGE = 'Ocorreu um erro desconhecido.';

type ProductInfo = {
  name: string,
  description: string,
  value: number,
  available: boolean
};

interface GetContextType {
  products: any[];
  messageError: string;
  getProducts: () => Promise<void>;
  postProduct: (product:ProductInfo) => Promise<void>;
  updateProduct: (id: number, product:ProductInfo) => Promise<void>;
  deleteProduct: (id:number) => Promise<void>;
}

const initialContextValue: GetContextType = {
  products: [],
  messageError: '',
  getProducts: async () => {},
  postProduct: async () => {},
  updateProduct: async () => {},
  deleteProduct: async () => {},
};

export const FetchProductContext = createContext<GetContextType>(initialContextValue);

function FetchProductProvider({ children }: any) {
  const [products, setproducts] = useState([]);
  const [messageError, setMessageError] = useState('');

  const getProducts = async () => {
    try {
      const response = await axios.get(URL);
      setproducts(response.data);
    } catch (error: any) {
      const { response } = error;
      setMessageError(response.data.message || UNKNOWN_MESSAGE);
    }
  };

  const postProduct = async (product: ProductInfo) => {
    try {
      await axios.post(URL, {
        name: product.name,
        description: product.description,
        value: product.value,
        available: product.available,
      });
    } catch (error: any) {
      const { response } = error;
      setMessageError(response.data.message || UNKNOWN_MESSAGE);
    }
  };

  const updateProduct = async (id: number, product: ProductInfo) => {
    try {
      await axios.put(`${URL}/${id}`, {
        name: product.name,
        description: product.description,
        value: product.value,
        available: product.available,
      });
    } catch (error: any) {
      const { response } = error;
      setMessageError(response.data.message);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await axios.delete(`${URL}/${id}`);
    } catch (error: any) {
      const { response } = error;
      setMessageError(response.data.message || UNKNOWN_MESSAGE);
    }
  };

  const contextValue = useMemo(() => ({
    products,
    messageError,
    getProducts,
    postProduct,
    updateProduct,
    deleteProduct,
  }), [products, messageError]);

  return (
    <FetchProductContext.Provider value={ contextValue }>
      { children }
    </FetchProductContext.Provider>
  );
}

export default FetchProductProvider;

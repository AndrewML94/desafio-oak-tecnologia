import { createContext, useMemo, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:8080';

type ProductInfo = {
  name: string,
  description: string,
  value: number,
  available: boolean
};

interface GetContextType {
  products: any[];
  getProducts: () => Promise<void>;
  postProduct: (product:ProductInfo) => Promise<void>;
  updateProduct: (id: number, product:ProductInfo) => Promise<void>;
  deleteProduct: (id:number) => Promise<void>;
}

const initialContextValue: GetContextType = {
  products: [],
  getProducts: async () => {},
  postProduct: async () => {},
  updateProduct: async () => {},
  deleteProduct: async () => {},
};

export const FetchProductContext = createContext<GetContextType>(initialContextValue);

function FetchProductProvider({ children }: any) {
  const [products, setproducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(URL);
      setproducts(response.data);
    } catch (error) {
      console.log('Erro em devolver todos os produtos!');
    }
  };

  const postProduct = async (product: ProductInfo) => {
    try {
      const response = await axios.post(URL, {
        name: product.name,
        description: product.description,
        value: product.value,
        available: product.available,
      });
      console.log(response.data);
      // setproducts(response.data);
    } catch (error) {
      console.log('Erro ao cadastrar o produto!');
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
    } catch (error) {
      console.log('Produto não encontrado!');
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      await axios.delete(`${URL}/${id}`);
    } catch (error) {
      console.log('Produto não encontrado!');
    }
  };

  const contextValue = useMemo(() => ({
    products,
    getProducts,
    postProduct,
    updateProduct,
    deleteProduct,
  }), [products]);

  return (
    <FetchProductContext.Provider value={ contextValue }>
      { children }
    </FetchProductContext.Provider>
  );
}

export default FetchProductProvider;

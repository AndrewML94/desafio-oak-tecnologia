import axios from 'axios';
import { createContext, useMemo, useState } from 'react';

interface GetContextType {
  products: any[];
  getProducts: () => Promise<void>;
  postProduct: (product:any) => Promise<void>;
}

const initialContextValue: GetContextType = {
  products: [],
  getProducts: async () => {},
  postProduct: async () => {},
};
export const FetchProductContext = createContext<GetContextType>(initialContextValue);

function FetchProductProvider({ children }: any) {
  const [products, setproducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080');
      setproducts(response.data);
    } catch (error) {
      console.log('Erro em devolver todos os produtos!');
    }
  };

  const postProduct = async (product: any) => {
    try {
      const response = await axios.post('http://localhost:8080', {
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

  const contextValue = useMemo(() => ({
    products,
    getProducts,
    postProduct,
  }), [products]);

  return (
    <FetchProductContext.Provider value={ contextValue }>
      { children }
    </FetchProductContext.Provider>
  );
}

export default FetchProductProvider;

import { useContext, useEffect } from 'react';
import { FetchProductContext } from '../context/FetchProductContext';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

function Table() {
  const { products, getProducts } = useContext(FetchProductContext);

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <div>
      {
        products.length === 0 ? <p>Nenhum produto cadastrado</p> : (
          <table>
            <thead>
              <tr>
                <th>Nome do Produto</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Disponível?</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((elem) => (
                  <tr key={ elem.id }>
                    <td>{ elem.name }</td>
                    <td>{ elem.description }</td>
                    <td>{ elem.value }</td>
                    <td>{ elem.available ? 'Sim' : 'Não' }</td>
                    <EditButton />
                    <DeleteButton />
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default Table;

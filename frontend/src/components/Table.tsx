import React, { useContext, useEffect, useState } from 'react';
import { Store } from 'react-notifications-component';
import { FetchProductContext } from '../context/FetchProductContext';
import editProduct from '../assets/edit.png';
import deleteProductImg from '../assets/delete.png';
import CreateProduct from './CreateProduct';

function Table() {
  const {
    products,
    messageError,
    getProducts,
    deleteProduct,
  } = useContext(FetchProductContext);
  const [isClicked, setIsClicked] = useState(false);
  const [isId, setId] = useState(0);

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, []);

  const handleButton = (elem: any) => {
    setIsClicked(!isClicked);
    setId(elem);
  };

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    await getProducts();
  };

  return (
    <div>
      {messageError && Store.addNotification({
        title: 'Ocorreu um erro!',
        message: `${messageError}`,
        type: 'danger',
        insert: 'top',
        container: 'center',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      })}
      {
        products.length === 0 ? <p>Nenhum produto cadastrado</p> : (
          <table>
            <thead>
              <tr>
                <th>Nome do Produto</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Disponível</th>
                <th>Editar / Excluir</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((elem) => (
                  <React.Fragment key={ elem.id }>
                    <tr>
                      <td>{elem.name}</td>
                      <td>{elem.description}</td>
                      <td>{elem.value}</td>
                      <td>{elem.available ? 'Sim' : 'Não'}</td>
                      <td>
                        <button
                          onClick={ () => handleButton(elem.id) }
                        >
                          <img
                            src={ editProduct }
                            alt="Botão com um lápis referente a editar um produto"
                          />
                        </button>
                        <button onClick={ () => handleDelete(elem.id) }>
                          <img
                            src={ deleteProductImg }
                            alt="Botão com a letra X referente a deletar um produto"
                          />
                        </button>
                      </td>
                    </tr>
                    {
                      isClicked && elem.id === isId && (
                        <tr>
                          <td>
                            <CreateProduct id={ elem.id } />
                          </td>
                          <td>
                            <button
                              onClick={ () => setIsClicked(!isClicked) }
                            >
                              Fechar edição
                            </button>
                          </td>
                        </tr>
                      )
                    }
                  </React.Fragment>
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

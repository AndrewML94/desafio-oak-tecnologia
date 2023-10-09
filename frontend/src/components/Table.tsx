/* eslint-disable react/jsx-max-depth */
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
          <table className="table table-striped table-hover container mt-5">
            <thead>
              <tr>
                <th scope="col" className="col-3">Nome do Produto</th>
                <th scope="col" className="col-5">Descrição</th>
                <th scope="col" className="col-1">Valor</th>
                <th scope="col" className="col-1">Disponível</th>
                <th scope="col" className="col-4">Editar / Excluir</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {
                products.map((elem) => (
                  <React.Fragment key={ elem.id }>
                    <tr>
                      <td>{elem.name}</td>
                      <td>{elem.description}</td>
                      <td>{elem.value}</td>
                      <td>{elem.available ? 'Sim' : 'Não'}</td>
                      <td className="opt-buttons">
                        <button
                          onClick={ () => handleButton(elem.id) }
                          className="optionButton"
                        >
                          <img
                            src={ editProduct }
                            alt="Botão com um lápis referente a editar um produto"
                          />
                        </button>
                        <button
                          onClick={ () => handleDelete(elem.id) }
                          className="optionButton"
                        >
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
                          <td colSpan={ 3 }>
                            <CreateProduct
                              id={ elem.id }
                              setIsClicked={ setIsClicked }
                              isClicked={ isClicked }
                            />
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

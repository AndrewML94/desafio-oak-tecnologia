import React, { useContext, useState } from 'react';
import { FetchProductContext } from '../context/FetchProductContext';

function CreateProduct({ id }: any) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    value: 0,
    available: false,
  });
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const { getProducts, postProduct, updateProduct } = useContext(FetchProductContext);

  const handleChange = ({ target }: any) => {
    const { name, value, type, checked } = target;

    let newValue: any;

    if (name === 'value') {
      newValue = parseFloat(value);
    } else if (type === 'checkbox') {
      newValue = checked;
    } else {
      newValue = value;
    }

    setFormData((prevData) => (
      {
        ...prevData,
        [name]: newValue,
      }
    ));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      value: 0,
      available: false,
    });
  };

  const isFormValid = () => {
    const error = [];

    if (formData.name === '') {
      error.push('O preenchimento do campo Nome do Produto é obrigatório!');
    }

    if (formData.description === '') {
      error.push('O preenchimento do campo Descrição do Produto é obrigatório!');
    }

    if (formData.value <= 0) {
      error.push(
        'O preenchimento do campo Valor do Produto deve ser um número maior que zero!',
      );
    }

    setErrorMessage(error);
    return error.length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid()) {
      if (!id) await postProduct(formData);
      if (id) await updateProduct(id, formData);

      setErrorMessage([]);
      resetForm();

      await getProducts();
    }
  };

  return (
    <section>
      <form
        onSubmit={ handleSubmit }
      >
        <span>{'Nome do produto: '}</span>
        <input
          type="text"
          id="name"
          name="name"
          value={ formData.name }
          onChange={ handleChange }
        />
        <span>{'Descrição do produto: '}</span>
        <input
          type="text"
          id="description"
          name="description"
          value={ formData.description }
          onChange={ handleChange }
        />
        <span>{'Valor do produto: '}</span>
        <input
          type="number"
          step="0.01"
          id="value"
          name="value"
          value={ formData.value === 0 ? '' : formData.value }
          onChange={ handleChange }
        />
        <input
          type="checkbox"
          id="available"
          name="available"
          checked={ formData.available }
          onChange={ handleChange }
        />
        <span>{' Disponível para a venda'}</span>
        {errorMessage.length > 0 && (
          <div>
            {
              errorMessage.map((message, index) => (
                <p
                  key={ index }
                >
                  { message }
                </p>
              ))
            }
          </div>
        )}
        <button>
          Enviar
        </button>
      </form>
    </section>
  );
}

export default CreateProduct;

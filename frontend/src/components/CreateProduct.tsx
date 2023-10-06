import React, { useContext, useState } from 'react';
import { FetchProductContext } from '../context/FetchProductContext';

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    value: 0,
    available: false,
  });
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const { postProduct } = useContext(FetchProductContext);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid()) {
      postProduct(formData);
      setErrorMessage([]);
      resetForm();
    }
  };

  return (
    <section>
      <form
        onSubmit={ handleSubmit }
      >
        <label htmlFor="name">
          Nome do produto:
          <input
            type="text"
            id="name"
            name="name"
            value={ formData.name }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição do produto:
          <input
            type="text"
            id="description"
            name="description"
            value={ formData.description }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="value">
          Valor do produto:
          <input
            type="number"
            step="0.01"
            id="value"
            name="value"
            value={ formData.value === 0 ? '' : formData.value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="available">
          <input
            type="checkbox"
            id="available"
            name="available"
            checked={ formData.available }
            onChange={ handleChange }
          />
          Disponível para a venda
        </label>
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

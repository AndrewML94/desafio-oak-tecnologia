import React, { useState } from 'react';

function CreateProduct() {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productValue: 0,
    productAvailable: false,
  });
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setFormData((prevData) => (
      {
        ...prevData,
        [name]: value,
      }
    ));
  };

  const resetForm = () => {
    setFormData({
      productName: '',
      productDescription: '',
      productValue: 0,
      productAvailable: false,
    });
  };

  const isFormValid = () => {
    const error = [];

    if (formData.productName === '') {
      error.push('O preenchimento do campo Nome do Produto é obrigatório!');
    }

    if (formData.productDescription === '') {
      error.push('O preenchimento do campo Descrição do Produto é obrigatório!');
    }

    if (formData.productValue <= 0) {
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
      resetForm();
      setErrorMessage([]);
    }
  };

  return (
    <section>
      <form
        onSubmit={ handleSubmit }
      >
        <label htmlFor="productName">
          Nome do produto:
          <input
            type="text"
            id="productName"
            name="productName"
            value={ formData.productName }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="productDescription">
          Descrição do produto:
          <input
            type="text"
            id="productDescription"
            name="productDescription"
            value={ formData.productDescription }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="productValue">
          Valor do produto:
          <input
            type="number"
            step="0.01"
            id="productValue"
            name="productValue"
            value={ formData.productValue }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="productAvailable">
          <input
            type="checkbox"
            id="productAvailable"
            name="productAvailable"
            checked={ formData.productAvailable }
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

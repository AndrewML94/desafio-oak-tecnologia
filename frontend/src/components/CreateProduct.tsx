import React, { useState } from 'react';

function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productValue, setProductValue] = useState(0);
  const [productAvailable, setProductAvailable] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section>
      <form
        onSubmit={ handleSubmit }
      >
        <input
          type="text"
          placeholder="Nome do Produto"
          onChange={ ({ target }) => setProductName(target.value) }
        />
        <input
          type="text"
          placeholder="Descrição do produto"
          onChange={ ({ target }) => setProductDescription(target.value) }
        />
        <input
          type="number"
          step="0.01"
          placeholder="Valor do produto"
          onChange={ ({ target }) => setProductValue(target.valueAsNumber) }
        />
        <input
          type="checkbox"
          id="available"
          name="available"
          checked={ productAvailable }
          onChange={ ({ target }) => setProductAvailable(target.checked) }
        />
        <label htmlFor="available">Disponível para a venda</label>
        <button>
          OK
        </button>
      </form>
    </section>
  );
}

export default CreateProduct;

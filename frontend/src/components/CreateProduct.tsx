import React, { useContext, useState } from 'react';
import { FetchProductContext } from '../context/FetchProductContext';
import '../styles/index.css';

function CreateProduct({ id, setIsClicked, isClicked }: any) {
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
      error.push('O preenchimento do campo Nome é obrigatório!');
    }

    if (formData.value <= 0) {
      error.push(
        'O preenchimento do campo Valor deve ser um número maior que zero!',
      );
      if (formData.description === '') {
        error.push('O preenchimento do campo Descrição é obrigatório!');
      }
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
    <section
      className="container mt-5"
    >
      <form
        onSubmit={ handleSubmit }
      >
        <div className="row">
          <div className="col-md-9">
            <span>Nome</span>
            <input
              type="text"
              id="name"
              name="name"
              value={ formData.name }
              onChange={ handleChange }
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-md-3">
            <span>Valor</span>
            <input
              type="number"
              step="0.01"
              id="value"
              name="value"
              value={ formData.value === 0 ? '' : formData.value }
              onChange={ handleChange }
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="col-12">
          <span>Descrição</span>
          <input
            type="text"
            id="description"
            name="description"
            value={ formData.description }
            onChange={ handleChange }
            className="form-control form-control-sm"
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              id="available"
              name="available"
              checked={ formData.available }
              onChange={ handleChange }
              className="form-check-input"
            />
            <span>Disponível</span>
          </div>
        </div>
        {errorMessage.length > 0 && (
          <div>
            {
              errorMessage.map((message, index) => (
                <div key={ index } className="alert alert-danger" role="alert">
                  { message }
                </div>

              ))
            }
          </div>
        )}
        <div
          className="d-grid gap-2"
        >
          <button
            className="btn btn-success btn-sm"
          >
            Enviar
          </button>
          {
          id && (
            <button
              onClick={ () => setIsClicked(!isClicked) }
              className="btn btn-danger btn-sm"
            >
              Fechar edição
            </button>
          )
        }
        </div>
      </form>
    </section>
  );
}

export default CreateProduct;

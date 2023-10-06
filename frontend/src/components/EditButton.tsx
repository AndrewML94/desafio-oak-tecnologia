import editProduct from '../assets/edit.png';

function EditButton() {
  return (
    <div>
      <button>
        <img
          src={ editProduct }
          alt="Botão com um lápis referente a editar um produto"
        />
      </button>
    </div>
  );
}

export default EditButton;

import deleteProduct from '../assets/delete.png';

function DeleteButton() {
  return (
    <div>
      <button>
        <img
          src={ deleteProduct }
          alt="Botão com a letra X referente a deletar um produto"
        />
      </button>
    </div>
  );
}

export default DeleteButton;

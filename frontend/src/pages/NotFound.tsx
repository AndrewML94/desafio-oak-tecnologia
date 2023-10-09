import { Link } from 'react-router-dom';
import notFound from '../assets/notFound.png';

function NotFound() {
  return (
    <div className="notFound">
      <img src={ notFound } alt="Imagem de uma placa com o número 404 nela." />
      <h1>Oops! Página não encontrada</h1>
      <h3>Desculpe, a página que você está procurando não existe.</h3>
      <Link to="/">
        <h4>Voltar à página inicial</h4>
      </Link>
    </div>
  );
}

export default NotFound;

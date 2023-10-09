import '../styles/index.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function Footer() {
  return (
    <footer className="header footer mt-auto">
      <div className="container text-center">
        <span className="title">
          Desafio de estágio da empresa
          {' '}
          <a href="https://www.oaktecnologia.com/" target="_blank" rel="noreferrer"> Oak Tecnologia.</a>
        </span>
        {' '}
        <span className="title">Desenvolvido por Andrew Lima.</span>
        {' '}
        {' '}
        <a
          href="https://linkedin.com/in/andrewmlima"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ linkedin } alt="Ícone da rede social LinkedIn" />

        </a>
        {' '}
        {' '}
        <a
          href="https://github.com/AndrewML94"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ github } alt="Ícone da plataforma de hospedagem de código GitHub" />

        </a>
      </div>
    </footer>
  );
}

export default Footer;

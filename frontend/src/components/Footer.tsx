import React from 'react';
import heart from '../assets/heart.png';

function Footer() {
  return (
    <footer>
      <p>Desenvolvido para concluir desafio de estágio da empresa Oak Tecnologia.</p>
      <img src={ heart } alt="Coração vermelho" />
    </footer>
  );
}

export default Footer;

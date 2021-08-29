import React from 'react';
import './Menu.css'

// import { Container } from './styles';

export default function menu() {
  return(
    <header className='main-header'>
      <nav>
        <ul className='ul-menu'>
          <li className='element'><a className='main-action red-element' href="#">Nacional</a></li>
          <li><a className='main-action' href="#">Business</a></li>
          <li><a className='main-action' href="#">Internacional</a></li>
          <li><a className='main-action bold-color' href="#">Saúde</a></li>
          <li><a className='main-action' href="#">Tecnologia</a></li>
          <li><a className='main-action' href="#">Esporte</a></li>
          <li><a className='main-action' href="#">Entretenimento</a></li>
          <li><a className='main-action' href="#">Estilo</a></li>
          <li><a className='main-action' href="#">Viagem &amp; Gastronomia</a></li>
          <li><a className='main-action' href="#">Newsletters</a></li>
          <li><a className='main-action' href="#">Podcasts</a></li>
        </ul>
      </nav>
    </header>
  );
}
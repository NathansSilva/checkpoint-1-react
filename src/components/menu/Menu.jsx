import React, { useState } from 'react';
import './Menu.css'

// import { Container } from './styles';

export default function Menu() {
  const[active, setModal] = useState(false);

  return(
    <header className='main-header'>
      <nav>
        <ul className={active ? 'ul-menu-mobile': 'ul-menu'} onClick={() => setModal(false)}>
          <li className='element'><a className='main-action red-element' href="#">Nacional</a></li>
          <li><a className='main-action' href="#">Business</a></li>
          <li><a className='main-action' href="https://youtu.be/EbDMNjT-QpI?list=OLAK5uy_nEjgtNBDU83C-Ev-_aDsMHnjZf2YIust0" target='_blank' rel="noreferrer">Internacional</a></li>
          <li><a className='main-action bold-color' href="#">Saúde</a></li>
          <li><a className='main-action' href="#">Tecnologia</a></li>
          <li><a className='main-action' href="#">Esporte</a></li>
          <li><a className='main-action' href="https://www.youtube.com/watch?v=XRaX_3qZhA0" target='_blank' rel="noreferrer">Entretenimento</a></li>
          <li><a className='main-action' href="#">Estilo</a></li>
          <li><a className='main-action' href="#">Viagem &amp; Gastronomia</a></li>
          <li><a className='main-action' href="#">Newsletters</a></li>
          <li><a className='main-action' href="#">Podcasts</a></li>
        </ul>
        <button className='menu-mobile' onClick={() => setModal(!active)}>
        {active ? <i className='fas fa-times'></i>:<i className='fas fa-bars'></i>}
        </button>
      </nav>
    </header>
  );
}
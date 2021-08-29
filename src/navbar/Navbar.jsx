import React, {useState} from 'react'

export default function Navbar() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
  }
    return (
        <>
    <header className='main-header'>
        <div className={active ? 'icon iconActive': 'icon'} onClick={ToggleMode}>
            <div className='hamburguer hamburguerIcon'>
                <nav className={active ? 'menu menuOpen': 'menu menuClose'}>
                    <ul className='ul-menu'>
                        <li className='elemento'><a className='main-action red-color' href="#">Nacional</a></li>
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
            </div>
      </div>
    </header>
        </>
    );
}

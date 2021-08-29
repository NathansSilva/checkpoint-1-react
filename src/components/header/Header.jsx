import react from 'react'
import author from '../../img/author.png'
import './Header.css'


export default function Header(){
    return(
	<>
    <div className="site-content">
        <div className="container-header">
            <main class='content'>
                <div>
                    <h1 className='title'>Quais são os sintomas da variante Delta da Covid-19? 
                        Teste seus conhecimentos</h1>
                    <p className='subtitle'>A infecção causada pela variante Delta pode provocar sintomas
                        diferentes da doença causada pela linhagem original do novo coronavírus </p>
                    <figure>
                    <img src={author} alt="Lucas Rocha, CNN. São Paulo" />
                    </figure>
                    <div className='span'>
                        <span>24/08/2021 às 16:44 | Atualizado às 16:56</span>
                    </div>      
                </div>
            </main>       
        </div>
    </div>
	</>
    );
} 
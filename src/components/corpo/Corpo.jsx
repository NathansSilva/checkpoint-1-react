import react from 'react'
import logo from '../../img/logo.svg'
import './Corpo.css'

export default function Corpo(){
    return(
        <>
        <div className='site-post'>
            <div className="container-corpo">
                <div className='cnn-box'>
                    <figure>
                        <img className='cnn-logo' src={logo} alt="" />
                    </figure>
                </div>
                <article className='article'>
                    <p className='p-text'>Por ser uma doença nova, a <a href="#">Covid-19 </a> ainda não foi compreendida totalmente pela comunidade médica global. 
                        Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.</p>
                    <p>A <a href="#">variante Delta da Covid-19,</a> originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. 
                        Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
                </article>
            </div>
        </div>
        </>
    );
}
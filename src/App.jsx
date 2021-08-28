import react from 'react'
import './App.css'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Corpo from './components/corpo/Corpo'

export default function App(){
    return(
        <>
        <section className='container'>
            <Menu/>
            <Header/>
            <Corpo/>
        </section>
        </>
    );
}
import react from 'react'
import './App.css'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'

export default function App(){
    return(
        <>
        <section className='container'>
            <Menu/>
            <Header/>
        </section>
        </>
    );
}
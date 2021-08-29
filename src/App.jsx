import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Corpo from './components/corpo/Corpo'

export default function App(){
    return(
        <>
        <div className='container'>
            <Menu/>
            <Header/>
            <Corpo/>
        </div>
        </>
    );
}
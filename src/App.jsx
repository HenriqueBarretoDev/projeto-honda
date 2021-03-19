import React from 'react';
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import BannerDestaque from './components/BannerDestaque'
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import BannerInferior from './components/BannerInferior';
import './App.scss'


export default () => {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <BannerDestaque/>
        
            <BannerInferior/>
            <Footer/>
        </div>
    )
}











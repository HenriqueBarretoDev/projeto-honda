import React from 'react';
import icone_home from './../Assets/Icones/home-button.svg'
import icone_mapa from './../Assets/Icones/mapa_button.svg'
import icone_envelope from './../Assets/Icones/envelope.svg'
import './Navbar.scss'
export default () => {
    return (
        <div className="barra-superior">
            <div className="barra-superior-esquerda">
                <div className="portal">
                    <img className="icones-barra-superior" src={icone_home} />
                    <a className="link desktop" href="url">Ir para o Portal Banzai</a>
                </div>
            </div>
            <div className="encontre">
                    <img className='icones-barra-superior' src={icone_mapa} alt="erro ao carregar img" />
                    <a className="link desktop" href="url">Encontre uma concessionária </a>
                </div>
                <div className="texto">
                    <img className="icones-barra-superior" src={icone_envelope} alt="" />
                    <a className="link desktop" href="url">Fale Conosco</a>
                </div>

        </div>
    )
}
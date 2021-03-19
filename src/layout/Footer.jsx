import React from 'react';
import './Footer.scss'
import logo_facebook from './../Assets/Icones/Caminho 87.svg'
import logo_gps from './../Assets/Icones/gps.svg'
import logo_instagram from './../Assets/Icones/instagram-circle.svg'
import twitch from './../Assets/Icones/twitch.svg'
import logofim1 from './../Assets/logos/logo@2x.png'
import logofim2 from './../Assets/logos/logo_ibama.png'


export default () => {
    return (
        <div className="footer">

            <div className="encontre_uma">

                <div className="barra-inferior box">

                    <div className="icone">
                        <img className="logo_gps" src={logo_gps} alt="" />
                    </div>
                    <div className="textos">
                        <p>Encontre uma </p>
                        <h5>CONCESSIONÁRIA</h5>
                    </div>

                </div>
                <div className="central box">
                    <h5 className="cda">CENTRAL DE ATENDIMENTO</h5>
                    <p className="tel">(31) 3123-1234</p>
                </div>


            </div>
            <div className="siga">
                <h2>SIGA A BANZAI NAS REDES SOCIAIS</h2>
                <div className="icones">
                    <img className="facebook" src={logo_facebook} alt="" />
                    <img className="instagram" src={logo_instagram} alt="" />
                    <img className="twitch" src={twitch} alt="" />

                </div>
            </div>
           
            <div className="inferior">
                <img className="logo01" src={logofim1} alt="" />
                <p className='texto'>Todos juntos fazem um trânsito melhor</p>
                <img className="logo02" src={logofim2} alt="" />
            </div>

        </div>
    )
}
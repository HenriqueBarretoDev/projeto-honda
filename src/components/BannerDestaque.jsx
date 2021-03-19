import React from 'react';
import './BannerDestaque.scss'
import Card1 from './Card1'
import FormTestDrive from './FormTestDrive';

import img_civic10 from './../Assets/Imagens/imagem centro/civic10.png'
import img_civic_mobile from './../Assets/Imagens/imagem centro/civic-mobile.png'
import img_civic_bco2 from './../Assets/Imagens/imagem centro/Retângulo 19@2x.png'
import img_civic_bco1 from './../Assets/Imagens/imagem centro/Retângulo 16@2x.png'
import img_civic_bco4 from './../Assets/Imagens/imagem centro/juntosi@2x.png'
import volante from './../Assets/Imagens/imagens_card/card1/volante.jpeg'
import marcha from './../Assets/Imagens/imagens_card/card1/marcha.jpg'
import painel from './../Assets/Imagens/imagens_card/card1/painel.jpeg'
import img_civic_bco3 from './../Assets/Imagens/imagem centro/Retângulo 21@2x.png'
import img_civicdentro from './../Assets/Imagens/imagem centro/novo painel/580116da0e2163027007cf6apainel-honda-civic-sport-manual.jpeg'

export default () => {
    return (
        <div className="banner-principal">

            <div className="banner-destaque">
                <img className="banner-primeiro-carro desktop" src={img_civic10} alt="" />
                <img className="banner-primeiro-carro mobile" src={img_civic_mobile} alt="" />
                <FormTestDrive/>
                <h2 className='texto-banner-principal'>A EMOÇÃO DE DIRIGIR LEVA VOCÊ MAIS LONGE</h2>

                <div className="banner-2">
                    <div className="banners-esquerda desktop">
                        <img className="foto" src={img_civic_bco1} />
                        <img className="foto" src={img_civic_bco2} />
                        <img className="foto" src={img_civic_bco3} />
                    </div>
                    <div className="banner-direita">
                        <img className="banner-central" src={img_civic_bco4} />
                    </div>

                </div>

                <div className="textos">
                    <p className="texto-principal">O novo Civic Geração 10 traz um design único mudando a categoria de sedãs para sempre. Ele garante a melhor dirigibilidade com o máximo em sofisticação e conforto, atribuído por seu design interno e diferenciada ergonomia.
                    </p>


                </div>

                <div className="container">
                    <div className="banner-3">
                        <img className="foto-destaque-banner-3" src={img_civicdentro} />
                        <div className="textos-banner3">
                            <p className="titulo">PREPARE-SE PARA ALGO REALMENTE NOVO</p>
                            <p className="subtitulo">O Novo Civic Geração 10 vem completo de série.
                    Conheça a versão perfeita para você.</p>
                        </div>
                     
                    </div>
                
                    <div className="cards">
                        
                        <Card1
                         titulo="Direção com Assistência"
                         subtitulo="Sistema de estabilidade que reforça
                         automaticamente o retorno da direção,
                         auxiliando o motorista em situações onde o 
                         carro está ameaçado de instabilidade."
                         imagem={volante} />
                          <Card1
                         titulo="Câmbio CVT com Paddle Shift"
                         subtitulo="O câmbio com transmissão CVT de 7
                         velocidades com Paddle Shift (aletas)
                         proporciona conforto ao trocar de 
                         marchas."
                         imagem={marcha} />
                          <Card1
                         titulo="Vidros elétricos com subida"
                         subtitulo="Todas as portas possuem vidros elétricos
                         com a função 'um toque' e sistema de
                         segurança antiesmagamento"
                         imagem={painel} />
                                                
                        
                    </div>
                    
                </div>

            </div>







        </div>


    )
}
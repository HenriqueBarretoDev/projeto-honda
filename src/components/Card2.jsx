import React from 'react';
import asd from './../Assets/Imagens/imagens_card/card2/city.png'
import './Card2.scss'
export default (props) => {
    return (
        <div className="meu_carro">
            <img src={props.imagem} alt="" />
            <p className="texto_card_3"><strong>{props.titulo}</strong></p>
            <a className="conheca" href="url"> CONHEÇA MAIS  </a>
        </div>
    )
}
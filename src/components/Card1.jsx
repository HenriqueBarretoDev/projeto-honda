import React from 'react';
import './Card1.scss'
import cardcivicdentro1 from './../Assets/Imagens/imagens card/card1/Honda-Civic-2021 (10).jpeg'
export default (props) => {
    return (
        <div className="card-1">
        <img className="imagens-cards" src={props.imagem} alt="" />
        <div className="texto">
            <p className="titulo-card-1"><strong>{props.titulo}</strong></p>
            <p className="subtitulo-card-1">{props.subtitulo}</p>
        </div>
    </div>
    

    )
}



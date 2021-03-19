
import React from 'react';
import './Header.scss'

import logo_honda from './../Assets/logos/logo.png'
export default () => {
    return (
        <div className="submenu-da-esquerda">
            <img className="logo" src={logo_honda} alt="" />

            <div className="submenu-da-direita">
                <p className="descricao">
                    CENTRAL DE ATENDIMENTO
                </p>

                <p className="telefone">
                    (31) 3123-1234
                </p>

            </div>

            <br />


        </div>
    )
}


import React from 'react';
import './FormTestDrive.scss'
import iconetelefone from './../Assets/Icones/telefone.svg'

export default () => {
    return (
        <div className="test-drive">
            <div className="menu-fixo">
                <div className="img-icone-telefone">
                    <img src={iconetelefone} alt="" />
                </div>
                <div className="titulo-menu-fixo">
                    <p>Solicitar um </p>
                    <h3>CONTATO</h3>
                </div>
            </div>

            <form className="form-test-driver" action="">

                <input className="ïnput-form" placeholder="Nome" type="text" />
                <input className="ïnput-form" placeholder="E-mail" type="text" />
                <input className="ïnput-form" placeholder="Telefone" type="text" />
                <input className="ïnput-form" placeholder="Escolha o horário" type="text" />
                <input className="ïnput-form" placeholder="Escolha a unidade" type="text" />

                <div className="menu-fixo-agendar">
                    <button type="button">AGENDAR TEST DRIVE</button>
                </div>
            </form>
        </div>
    )
}
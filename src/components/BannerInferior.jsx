import React from 'react';
import Card2 from './../components/Card2'
import './BannerInferior.scss'
import accord from './../Assets/Imagens/imagens_card/card2/accord.png'
import city from './../Assets/Imagens/imagens_card/card2/city.png'
import fit from './../Assets/Imagens/imagens_card/card2/fit_2018.png'
export default () => {
    return (

        <div className="banner-inferior">
            <div className="lancamentos-honda">
                <p className="texto1">PRONTO PARA TER UM HONDA?</p>
                <p className="texto2">Conheça os últimos grandes lançamentos da honda.</p>
            </div>
            <div className="modelos-carros">
                <Card2 
                    titulo="O City está muito mais moderno e esportivo. Com design único e mais tecnológico do que nunca, ele vai conquistar todos os olhares.                              "
                    imagem={city}
                ></Card2>
                <Card2
                    titulo="Novo Honda Accord: a combinação perfeita de três atributos exigidos pelo consumidor: elegância, luxo e alto desempenho."
                    imagem={accord}></Card2>
                <Card2
                    titulo="Com seu design inconfundível, o novo Honda Fit traz novidades que vão surpreender a todos e atrair ainda mais fãs."
                    imagem={fit}
                ></Card2>
            </div>

        </div>

    )
}
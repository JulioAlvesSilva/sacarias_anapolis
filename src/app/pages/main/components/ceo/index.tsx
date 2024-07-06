'use cliente'
import styles from './CEO.module.scss';

export default function CEOMain() {

    return (
        <section className={styles.CEO} id='CEO'>
            <h2>CEO</h2>
            <div className={styles.CEO_main}>
                <img src="/imagens/ceo/imagem1.jpg" alt="CEO" />
                <div>
                    <p>Meu nome é Thiago Rodrigues dos Santos, sou natural de Anápolis, Goiás, e atualmente resido no bairro Vila São Vicente. Desde a infância, sempre tive o sonho de possuir meu próprio negócio e oferecer produtos de alta qualidade. Com muita dedicação e visão empreendedora, encontrei a oportunidade perfeita no mercado de sacarias e big bags.</p>
                    <p>Fundar minha própria empresa foi a realização de um sonho, e hoje me orgulho de poder atender meus clientes com produtos de primeira linha. Cada negociação é uma oportunidade de construir relacionamentos duradouros e de confiança. Para garantir a satisfação de meus clientes, estou sempre em busca de inovações e melhorias, focado em entregar o melhor serviço e as melhores mercadorias.</p>
                    <p>É um prazer imenso poder servir e contribuir para o sucesso dos meus clientes. Estou comprometido em manter um padrão de excelência, adaptando-me constantemente às demandas do mercado para oferecer sempre o melhor.</p>
                </div>
            </div>
        </section>
    )
}
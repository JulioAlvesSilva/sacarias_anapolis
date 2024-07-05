'use client'
import styles from './Products.module.scss';
import Slider from "react-slick";
import dadosProduto from './dados.json';
import { FaWhatsapp } from "react-icons/fa";
export default function Products(){
    const settingsProducts = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return(
        <section className={styles.products} id='nossosProdutos'>
            <h2>Nossos Produtos</h2>
            <Slider {...settingsProducts}>
                {dadosProduto.map(item => (
                    <div key={item.id}>
                        <img src={`/imagens/produtos/${item.nome}`} alt={item.alt} />
                    </div>
                ))}
                </Slider>
                <div className={styles.botao}>
                <span>Solicitar orçamento</span>
                    <FaWhatsapp/>
                </div>
        </section>
    )
}
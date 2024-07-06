'use client'
import styles from './Products.module.scss';
import Slider from "react-slick";
import dadosProduto from './dados.json';
import { FaWhatsapp } from "react-icons/fa";
import useScreenSize from '@/hooks/useScreenSize';
import { WhatsApp } from '@/hooks/useMidiaSoci';
export default function Products() {
    const smallScreen = useScreenSize();
    const settingsProducts = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: smallScreen ? 1 : 3,
        slidesToScroll: 1,
    };
    return (
        <section className={styles.products} id='nossosProdutos'>
            <h2>Um pouco do nosso catálogo</h2>
            <Slider {...settingsProducts}>
                {dadosProduto.map(item => (
                    <div key={item.id}>
                        <img src={`/imagens/produtos/${item.nome}`} alt={item.alt} />
                    </div>
                ))}
            </Slider>
            <div className={styles.botao} onClick={()=> WhatsApp("Para dar continuidade no atendimento, informe seu nome: ")}>
                <span>Solicitar orçamento</span>
                <FaWhatsapp />
            </div>
        </section>
    )
}
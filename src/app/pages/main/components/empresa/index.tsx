'use client'
import Slider from 'react-slick';
import styles from './Empresa.module.scss';
import dadosMap from './dados.json';
export default function EmpresaMain() {
    const settingsEmpresa = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <section id='Empresa' className={styles.empresa}>
            <h2>Nossos clientes são a nossa prioridade</h2>
            <div className={styles.empresa_texto}>
                <p>Somos uma empresa comprometida com a responsabilidade ambiental, sempre operando em harmonia com o meio ambiente. Valorizamos profundamente nossos trabalhadores e colocamos a satisfação do cliente como nossa prioridade máxima.

                    Na Sacarias e Big Bag Anápolis, nos dedicamos a fornecer as melhores sacarias e Big Bags da região. Estamos sempre à disposição para atender às suas necessidades com produtos de alta qualidade e um atendimento excepcional.

                    Não perca tempo! Solicite agora seu orçamento e descubra como podemos construir juntos uma parceria duradoura e de confiança. Juntos, vamos alcançar o sucesso, respeitando o meio ambiente e valorizando cada pessoa envolvida em nosso processo.</p>
                <div className={styles.empresa_texto_slider}>
                    <Slider {...settingsEmpresa}>
                        {dadosMap.map(item => (
                            <div key={item.id}>
                                <img src={`/imagens/empresa/${item.nome}`} alt={item.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
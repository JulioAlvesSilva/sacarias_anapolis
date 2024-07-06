import styles from './SecondPart.module.scss';

export default function SecondPart(){
    return(
        <section className={styles.second}>
            <a href="#nossosProdutos">
                Nossos Produtos
            </a>
            <a href="#CEO">
                CEO
            </a>
            <a href="#Empresa">
                Nossa empresa
            </a>
        </section>
    )
}
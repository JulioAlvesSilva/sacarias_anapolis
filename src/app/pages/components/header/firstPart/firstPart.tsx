import styles from "./First.module.scss";
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";

export default function FirstPart() {
    return (
        <section className={styles.header}>
            <img src="/imagens/logo.png" alt="Logo" />
            <div className={styles.header_chat}>
                <div className={styles.header_chat_whats}>
                    <h4>Fale conosco</h4>
                    <FaWhatsapp />
                </div>
                <div className={styles.header_chat_soci}>
                    <h4>Siga-nos nas redes sociais</h4>
                    <div>
                        <FaInstagram />
                        <FaFacebookSquare />
                    </div>
                </div>
            </div>
        </section>
    )
}
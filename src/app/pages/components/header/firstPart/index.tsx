import { Facebook, Instagram, WhatsApp } from "@/hooks/useMidiaSoci";
import styles from "./First.module.scss";
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";

export default function FirstPart() {
    return (
        <section className={styles.header}>
            <img src="/imagens/logo.png" alt="Logo" />
            <div className={styles.header_chat}>
                <div className={styles.header_chat_whats} onClick={() => WhatsApp("Para dar continuidade no atendimento, informe seu nome: ")}>
                    <h4>Fale conosco</h4>
                    <FaWhatsapp />
                </div>
                <div className={styles.header_chat_soci}>
                    <h4>Redes sociais</h4>
                    <div>
                        <FaInstagram onClick={() => Instagram()} />
                        <FaFacebookSquare onClick={() => Facebook()} />
                    </div>
                </div>
            </div>
        </section>
    )
}
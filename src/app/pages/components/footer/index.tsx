'use client'
import { Facebook, Instagram, WhatsApp } from '@/hooks/useMidiaSoci';
import styles from './Footer.module.scss';
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";
export default function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.footer_1ln}>
                <img src="/imagens/logo.png" alt="logo" />
                <div className={styles.footer_1ln_contact}>
                    <span>Entre em contato</span>
                    <div className={styles.footer_1ln_contact_imgs}>
                        <FaWhatsapp onClick={()=> WhatsApp("Para dar continuidade no atendimento, informe seu nome: ")}/>
                        <FaInstagram onClick={()=> Instagram()}/>
                        <FaFacebookSquare onClick={()=> Facebook()}/>
                    </div>
                </div>
            </div>
            <div className={styles.footer_2ln}>
                <p>Sacarias e Big Bag Anápolis © 2024 todos os direitos reservados</p>
                <p>Rua RT 15 Qd: 17 Lt: 18 Bairro: Residencial do Trabalhador Anápolis - GO CEP: 75136375</p>
                <a href="mailto:sacariasanapolis@gmail.com" className={styles.footer_2ln_email}>✉ sacariasanapolis@gmail.com</a>
            </div>
        </section>
    )
}
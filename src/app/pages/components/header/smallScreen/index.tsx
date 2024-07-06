'use client'
import styles from './SmallScreen.module.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { useState } from 'react';
import { Facebook, Instagram, WhatsApp } from '@/hooks/useMidiaSoci';

export default function SmallScreen() {
    const [visible, setVisible] = useState<boolean>(false);

    function isVisible() {
        setVisible(!visible)
    }

    return (
        <section className={styles.smallScreen}>
            <div className={styles.smallScreen_1pt}>
                <img src="/imagens/logo.png" alt="" />
                <GiHamburgerMenu onClick={isVisible} style={{ color: visible ? 'aqua' : 'white' }} />
            </div>
            <div className={styles.smallScreen_2pt} style={{ display: visible ? 'block' : 'none' }}>
                <div className={styles.smallScreen_2pt_whats} onClick={() => WhatsApp("Para dar continuidade no atendimento, informe seu nome: ")}>
                    <h4>Fale conosco</h4>
                    <FaWhatsapp />
                </div>
                <div className={styles.smallScreen_2pt_soci}>
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
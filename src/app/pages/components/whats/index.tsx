'use client'
import { WhatsApp } from '@/hooks/useMidiaSoci';
import styles from './Whats.module.scss';
export default function Whats() {
    return (
        <section className={styles.whats}>
            <img src='/imagens/whats.png' alt='whatsApp' onClick={()=> WhatsApp("Para dar continuidade no atendimento, informe seu nome: ")}/>
        </section>
    )
}
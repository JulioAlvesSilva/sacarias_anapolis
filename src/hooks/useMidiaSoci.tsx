const ativarBotao = async (botao: string) => {
    try {
        const urlAtual = process.env.URL_PAINEL;
        const dataHoraAtual = new Date();
        const dataISO = dataHoraAtual.toISOString();
        const horaISO = dataHoraAtual.toTimeString().split(' ')[0];

        const response = await fetch(`${urlAtual}/salvar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                botao: botao,
                data: dataISO,
                hora: horaISO
            }),
        });

        if (response.ok) {

        } else {
            console.error('Erro ao enviar dados:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao realizar requisição:', error);
    }
};

function Instagram() {
    const insta = "https://instagram.com/sacarias_e_big_bag_anapolis?igshid=MzRlODBiNWFlZA=="
    window.open(insta, '_blank');
    ativarBotao("Entrei no instagram");
}
function Facebook() {
    const face = "https://www.facebook.com/profile.php?id=100080136799599&mibextid=ZbWKwL"
    window.open(face, '_blank');
    ativarBotao("Entrei no Facebook");
}
function WhatsApp(mensagem: string) {
    const phoneNumber = '62992990052';
    const isMobile = window.innerWidth <= 800;
    const baseUrl = isMobile ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`
        : `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(mensagem)}`
    window.open(baseUrl, '_blank');
    ativarBotao("Iniciei uma conversa pelo whats");
}

export { Facebook, Instagram, WhatsApp }
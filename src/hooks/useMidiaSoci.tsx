function Instagram() {
    const insta = "https://instagram.com/sacarias_e_big_bag_anapolis?igshid=MzRlODBiNWFlZA=="
    window.open(insta, '_blank')
}
function Facebook() {
    const face = "https://www.facebook.com/profile.php?id=100080136799599&mibextid=ZbWKwL"
    window.open(face, '_blank')
}
function WhatsApp(mensagem: string) {
    const phoneNumber = '62992990052';
    const isMobile = window.innerWidth <= 800;
    const baseUrl = isMobile ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`
        : `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(mensagem)}`
    window.open(baseUrl, '_blank');
}

export { Facebook, Instagram, WhatsApp }
function gerarQRCode() {
    const url = document.getElementById('url').value;
    const container = document.getElementById('qr-container');
    
    // Limpar container
    container.innerHTML = '';
    
    // Gerar QR Code
    new QRCode(container, {
        text: url,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Gerar automaticamente ao carregar a página
window.onload = function() {
    gerarQRCode();
};

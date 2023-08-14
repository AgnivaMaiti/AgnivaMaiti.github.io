document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('intro-text');
    const translateButton = document.getElementById('translate-button');
    let isTranslated = false;

    translateButton.addEventListener('click', function() {
        if (!isTranslated) {
            introText.textContent = '¡Bienvenido a mi sitio web! Aquí encontrarás...'; // Update with translated text
            translateButton.textContent = 'Original'; // Update button text
            isTranslated = true;
        } else {
            introText.textContent = 'Welcome to my website! Here you\'ll find...'; // Original text
            translateButton.textContent = 'Translate'; // Original button text
            isTranslated = false;
        }
    });
});

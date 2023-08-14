document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('intro-text');
    const banglaLink = document.getElementById('translate-bangla');
    const hindiLink = document.getElementById('translate-hindi');
    const dropdownContent = document.querySelector('.dropdown-content');
    let currentLanguage = 'english';

    banglaLink.addEventListener('click', function() {
        introText.textContent = 'আমার ওয়েবসাইটে আপনাকে স্বাগতম! এখানে আপনি...'; // Update with translated text
        currentLanguage = 'bangla';
        closeDropdown();
    });

    hindiLink.addEventListener('click', function() {
        introText.textContent = 'मेरी वेबसाइट में आपका स्वागत है! यहाँ आपको...'; // Update with translated text
        currentLanguage = 'hindi';
        closeDropdown();
    });

    function closeDropdown() {
        dropdownContent.classList.remove('show');
    }

    const dropbtn = document.querySelector('.dropbtn');
    dropbtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            closeDropdown();
        }
    });
});


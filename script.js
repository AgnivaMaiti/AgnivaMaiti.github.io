document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('intro-text');
    const translateLinks = document.querySelectorAll('.dropdown-content a');
    const dropdownContent = document.querySelector('.dropdown-content');
    let currentLanguage = 'english';

    translateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const selectedLang = e.target.getAttribute('data-lang');
            currentLanguage = selectedLang;
            translateText(selectedLang);
            closeDropdown();
        });
    });

    function translateText(language) {
        if (language === 'english') {
            itsname.textContent = 'Agniva Maiti';
            translate.textContent = 'Translate';
            about.textContent = 'About Me';
            blog.textContent = 'Blog';
            certificates.textContent = 'Certificates';
            projects.textContent = 'Projects';
            github.textContent = 'GitHub';
            linkedin.textContent = 'LinkedIn';
            introText.textContent = 'Book-lover, cloud-gazer, and coffee aficionado on a coding adventure...';
        }
        else if (language === 'hindi') {
            itsname.textContent = 'अग्निभ माईति';
            translate.textContent = 'अनुवाद';
            about.textContent = 'मेरे बारे में';
            blog.textContent = 'ब्लॉग';
            certificates.textContent = 'प्रमाणपत्र';
            projects.textContent = 'प्रायोजना';
            github.textContent = 'गिटहब';
            linkedin.textContent = 'लिंक्डइन';
            introText.textContent = 'एक पुस्तक और कॉफी प्रेमी मेघदर्शी, उसके कोडिंग अभियान पर...';
        }

        else if (language === 'bangla') {
            itsname.textContent = 'অগ্নিভ মাইতি';
            translate.textContent = 'অনুবাদ';
            about.textContent = 'আমার সম্পর্কে';
            blog.textContent = 'লেখালেখি';
            certificates.textContent = 'সনদপত্র';
            projects.textContent = 'প্রকল্প';
            github.textContent = 'গিটহাব';
            linkedin.textContent = 'লিঙ্কডইন';
            introText.textContent = 'একটি বই ও কফি-প্রেমি মেঘদর্শী, তার কোডিং অভিযানে... ';
        }
    }

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

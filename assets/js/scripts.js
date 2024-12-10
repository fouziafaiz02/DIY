// Responsive Menu
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const body = document.body;

    if (menuBtn && closeMenuBtn) {
        menuBtn.addEventListener('click', () => {
            body.classList.add('menu-open');
        });

        closeMenuBtn.addEventListener('click', () => {
            body.classList.remove('menu-open');
        });
    }
});

// Search Hover
document.addEventListener('DOMContentLoaded', () => {
    // Hover for Desktop
    const desktopSearchModal = document.querySelector('.search-modal-desktop');
    if (desktopSearchModal) {
        desktopSearchModal.addEventListener('mouseover', () => {
            document.body.classList.add('hovered-class');
        });
        desktopSearchModal.addEventListener('mouseout', () => {
            document.body.classList.remove('hovered-class');
        });
    }

    // Click for Mobile
    const mobileSearchBtn = document.getElementById('searchBtnMobile');
    const mobileCloseBtn = document.getElementById('closeButtonMobile');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('clicked-class');
        });
    }
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', () => {
            document.body.classList.remove('clicked-class');
        });
    }

    // Search Functionality
    const handleSearch = (inputId, clearButtonId, resultsId) => {
        const searchInput = document.getElementById(inputId);
        const clearButton = document.getElementById(clearButtonId);
        const searchResults = document.getElementById(resultsId);

        const sampleData = ["JavaScript", "HTML", "CSS", "React", "Angular", "Vue.js", "Node.js", "PHP", "Python", "Django", "Flask"];

        const showResults = (query) => {
            const filteredData = sampleData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
            searchResults.innerHTML = filteredData.length
                ? filteredData.map(item => `<p>${item}</p>`).join('')
                : '<p>No results found</p>';
        };

        if (searchInput && clearButton && searchResults) {
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.trim();
                query ? showResults(query) : (searchResults.innerHTML = '');
            });

            clearButton.addEventListener('click', () => {
                searchInput.value = '';
                searchResults.innerHTML = '';
            });

            searchResults.addEventListener('click', (e) => {
                if (e.target.tagName === 'P') {
                    searchInput.value = e.target.textContent;
                    searchResults.innerHTML = '';
                }
            });
        }
    };

    handleSearch('searchInputMobile', 'clearButtonMobile', 'searchResultsMobile');
    handleSearch('searchInputDesktop', 'clearButtonDesktop', 'searchResultsDesktop');
});


// Select Field
document.addEventListener('DOMContentLoaded', () => {
    const customSelect = document.querySelector('.custom-select');
    const selectedOption = document.querySelector('.selected-option');
    const optionsList = document.querySelector('.options-list');
    const options = document.querySelectorAll('.option');

    if (customSelect && selectedOption && optionsList && options.length) {
        customSelect.addEventListener('click', () => {
            optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                selectedOption.textContent = option.textContent;
                optionsList.style.display = 'none';
            });
        });

        document.addEventListener('click', (e) => {
            if (!customSelect.contains(e.target)) {
                optionsList.style.display = 'none';
            }
        });
    }
});

// Images Slider
jQuery(document).ready(function () {
    const slider = jQuery('.images-slider');
    if (jQuery.fn.slick && slider.length) {
        slider.slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/angle-left.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/images/angle-right.svg"></button>',
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true }},
                { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 }},
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 }},
            ]
        });
    }
});

// Function to load header and footer includes
document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error loading include:', error));
    }

    // Load Header
    loadHTML('includes/header.html', 'header-placeholder');

    // Load Footer
    loadHTML('includes/footer.html', 'footer-placeholder');

    // Carousel Logic for index.html
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    if (carouselSlides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // 5 seconds

        function nextSlide() {
            carouselSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % carouselSlides.length;
            carouselSlides[currentSlide].classList.add('active');
        }

        // Initialize the first slide
        carouselSlides[0].classList.add('active');

        // Start the carousel
        setInterval(nextSlide, slideInterval);
    }
});

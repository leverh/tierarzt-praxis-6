document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.classList.remove('d-none');
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
            setTimeout(() => {
                if (!scrollButton.classList.contains('show')) {
                    scrollButton.classList.add('d-none');
                }
            }, 300);
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
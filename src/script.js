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

    const hasVisitedBefore = localStorage.getItem('hasVisitedVetSite');
  const modal = document.getElementById('welcomeModal');
  const closeButton = document.getElementById('closeModal');
  const exploreButton = document.getElementById('exploreButton');
  
  function closeModal() {
    modal.classList.remove('active');
    localStorage.setItem('hasVisitedVetSite', 'true');
  }
  
  if (!hasVisitedBefore) {
    setTimeout(function() {
      modal.classList.add('active');
    }, 500);
  }
  
  closeButton.addEventListener('click', closeModal);
  exploreButton.addEventListener('click', closeModal);
  
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  function resetFirstVisit() {
    localStorage.removeItem('hasVisitedVetSite');
    console.log('First visit reset. Refresh page to see modal again.');
  }
  
  window.resetFirstVisit = resetFirstVisit;
});
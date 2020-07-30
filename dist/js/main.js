const nav = document.querySelector('#nav-main');

// Add backgroud to navbar
window.addEventListener('scroll', function () {
  if (window.scrollY > 2) {
    nav.className = 'navbar';
  } else {
    nav.classList.remove('navbar');
  }
});

// Smooth Scrolling
$('#nav-main a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 80
      }
    );
  }
});

// Add backgroud to navbar
window.addEventListener('scroll', function () {
  const nav = document.querySelector('#nav-main');
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

// Burger
$(document).ready(function () {
  $('.nav-burger').click(function (event) {
    $('.nav-burger, .nav-links').toggleClass('nav-active');
    $('body').toggleClass('lock');
  });
});

// Remove burger 
$('.nav-links ul li').click(function (event) {
  $('.nav-burger,.nav-links').removeClass('nav-active');
  $('body').removeClass('lock');
});


// Avtive nav link
var sections = $('section, main')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function () {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('nav-color');
      sections.removeClass('active');

      $(this).addClass('nav-color');
      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('nav-color');
    }
  });
});


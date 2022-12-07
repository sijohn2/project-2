// your script file for adding your own jquery
$(function () {
  // Your Code from here on down. Don't delete that line above!

  $('.my-slick').slick({
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })

  // End of Your Code . Don't delete that line below!!
})
;('use strict')

function toggleIcon() {
  $('.icon').on('click', function () {
    $('.icon').toggleClass('active')
    $('.menu-mobile').slideToggle(300)
  })
}

function closeMobileMenu() {
  $('.menu-mobile').on('click', 'a', function () {
    $('.icon').trigger('click')
  })
}

//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)

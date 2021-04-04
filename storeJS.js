
  $('.owl-carousel').owlCarousel({
loop:true,
nav:true,
navText: ["<img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header7/Header-7-4.png'>","<img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header7/Header-7-5.png'>"],
dots: false,
items:1
})

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".header-sticky");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

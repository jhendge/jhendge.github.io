//STICKY NAV
$(document).ready(function () {
  var top = $('#top-line').offset().top - parseFloat($('#top-line').css('marginTop').replace(/auto/, 100));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, add the fixed class
      $('#top-line').addClass('fixed');
    } else {
      // otherwise remove it
      $('#top-line').removeClass('fixed');
    }
  });
});

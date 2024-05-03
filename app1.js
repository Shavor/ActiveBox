$(function () {

  let header = $('#header');
  let intro = $('#intro');

  let introH = intro.innerHeight();
  let scrolPos = $(window).scrollTop();

  $(window).on('scroll', function () {

    scrolPos = $(this).scrollTop();

    if (scrolPos > introH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

});
$(document).ready(() => {
  // MOBILE MENU BTN ANIMATION ON CLICK
  $(".mobile-btn").click(() => {
    $(".mobile-btn").toggleClass("active");
    $("header nav .mobile-links").toggleClass("active");
  });

  $(window).scroll(() => {
    const scr = $(this).scrollTop();

    // If we scroll 100px the header nav background will change color
    if (scr > 100) {
      $("nav").addClass("active");
      $("header nav .mobile-links ul").addClass("active");
    } else {
      $("nav").removeClass("active");
      $("header nav .mobile-links ul").removeClass("active");
    }
  });
});

$(window).load(function () {
/*

 * Scroll the window to avoid the topnav bar
 * https://github.com/twitter/bootstrap/issues/1768
 */
if ($(".navbar.navbar-fixed-top").length > 0) {
  // var navHeight = $(".navbar").height(),
  var navHeight = 40,
    shiftWindow = function() { scrollBy(0, -navHeight - 10); };

  if (location.hash) {
    setTimeout(shiftWindow, 1);
  }

  window.addEventListener("hashchange", shiftWindow);
}
});

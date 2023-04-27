// JavaScript 코드
window.addEventListener("scroll", function () {
  var header = document.querySelector(".fixed-header");
  var windowPosition = window.scrollY > 0;

  header.style.opacity = windowPosition ? "0.7" : "1"; // 스크롤 위치에 따라 투명도 조절
});

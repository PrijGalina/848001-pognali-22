let header = document.querySelector(".page-header");
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10){
    header.classList.add("page-header--scroll");
  }
  else {
    header.classList.remove("page-header--scroll");
  }
});

const barbtn = document.querySelector('.bar');
const nav_container = document.querySelector('.nav-container');
const ardw_sub_nav = document.querySelector('.show-more-sub-nav')
const subnav = document.querySelector('.sub-nav')
const close_search_input = document.querySelector('.close-search-input');
const searchbtn = document.querySelector('.search-icon');
const close_input = document.querySelector('.close');
const closenav = document.querySelector('.close-nav-container')



barbtn.addEventListener('click', function () {
    nav_container.classList.add('active');
    closenav.classList.add('active');    
})
closenav.addEventListener('click', function () {
    nav_container.classList.remove('active');
})

// Js search icon

searchbtn.addEventListener('click', function () {
    close_search_input.classList.toggle('active')
    close_input.classList.add('active');
    subnav.classList.remove('active');

});
close_input.addEventListener('click', function () {
    close_search_input.classList.remove('active');
})
ardw_sub_nav.addEventListener('click', function () {
    close_search_input.classList.remove('active');
    subnav.classList.toggle('active');
});
// ==============================
var rollToTopBtn = document.querySelector('.roll-to-top-btn');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    rollToTopBtn.style.display = 'block';
  } else {
    rollToTopBtn.style.display = 'none';
  }
});


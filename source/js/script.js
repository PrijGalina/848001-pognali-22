let header = document.querySelector(".page-header");
header.classList.remove("page-header--open");
/* all page */
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10){
    if (header.classList.contains("page-header--open")) {

    }
    else {
      header.classList.add("page-header--scroll")
    }
  }
  else {
    header.classList.remove("page-header--scroll");
  }
});
let viewport = window.innerWidth;
let menu_btn_open = document.querySelector(".page-header__toggle");
if (viewport < 1440){
  menu_btn_open.classList.remove("page-header__toggle--hidden");
  menu_btn_open.addEventListener("click", function (e) {
    e.preventDefault();
    if (header.classList.contains("page-header--scroll")) {
      header.classList.remove("page-header--scroll");
      window.scrollTo(0, 0);
    }
    header.classList.toggle("page-header--open");
  });
}

/*index.html*/
let business_open_btn = document.querySelector(".prices__business");
let business_modal = document.querySelector(".modal--business");
let business_close_btn = document.querySelector(".modal__close");
if (business_open_btn){
  business_open_btn.addEventListener("click", function (e) {
    e.preventDefault();
    business_modal.classList.add("modal--open");
  });
  business_close_btn.addEventListener("click", function (e) {
    e.preventDefault();
    business_modal.classList.remove("modal--open");
  });
}

/*form.html*/
let counters = document.querySelectorAll(".counter");
let counter__button_next = document.querySelectorAll(".counter__button--next");
let counter__button_prev = document.querySelectorAll(".counter__button--prev");
let pagination = document.querySelectorAll(".pagination__btn");
let num_value = 0;
let counter_current = null;
if (counters) {
  counters.forEach(function (counter, num) {
    num_value = num + 1;
    if(num == 0){
      counter.classList.add("counter--current");
    }
    else {
      counter.classList.add("counter--hidden");
    }
  });

  counter__button_next.forEach(function (btn, num) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      counter_current = document.querySelector(".counter--current");
      pagination__current = document.querySelector(".pagination__btn--current");
      let new_step_count = Number(counter_current.dataset.step); //номер шага на который переходим
      counter_current.classList.remove("counter--current");
      counter_current.classList.add("counter--hidden");
      pagination__current.classList.remove("pagination__btn--current");
      let new_step = counters[new_step_count];
      let new_pagination_current = pagination[new_step_count];
      new_step.classList.remove("counter--hidden");
      new_step.classList.add("counter--current");
      new_pagination_current.classList.add("pagination__btn--current");
    });
  });

  counter__button_prev.forEach(function (btn, num) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      counter_current = document.querySelector(".counter--current");
      pagination__current = document.querySelector(".pagination__btn--current");
      let step_prev = Number(counter_current.dataset.step) - 2; //номер шага на который переходим
      counter_current.classList.remove("counter--current");
      counter_current.classList.add("counter--hidden");
      pagination__current.classList.remove("pagination__btn--current");
      let prev_step = counters[step_prev];
      let new_pagination_current = pagination[step_prev];
      prev_step.classList.remove("counter--hidden");
      prev_step.classList.add("counter--current");
      new_pagination_current.classList.add("pagination__btn--current");

    });
  });

  pagination.forEach(function (pagination_btn, num) {
    pagination_btn.addEventListener("click", function (e) {
      e.preventDefault();
    });
  })
}
let country_more_btn = document.querySelector(".country-select__value--choice"); // +- country-select__value--open
let country_select_dropdown = document.querySelector(".counter__select-dropdown"); // +- counter__select-dropdown--open
if (country_more_btn){
  country_more_btn.addEventListener("click", function (e) {
    e.preventDefault();
    country_more_btn.classList.toggle("country-select__value--open");
    country_select_dropdown.classList.toggle("counter__select-dropdown--open");
  });
}

/*catalog*/
let filter = document.querySelector(".filters");
let filters_btn_open = document.querySelector(".filters__see-block--open");
let filters_btn_close = document.querySelector(".filters__see-block--close");
var filters_close = document.querySelector(".filters__close");
if(filter){
  filter.classList.remove("filters--open");
  filters_btn_open.addEventListener("click", function (e) {
    e.preventDefault();
    filter.classList.add("filters--open");
  });
  filters_btn_close.addEventListener("click", function (e) {
    e.preventDefault();
    filter.classList.remove("filters--open");
  });
  filters_close.addEventListener("click", function (e) {
    e.preventDefault();
    filter.classList.remove("filters--open");
  });
}
//company-choice__group-list
//company-choice__group
//company-choice__group--close
let field_toggles = document.querySelectorAll(".company-choice__group-title");
let choice_group = document.querySelectorAll(".company-choice__group");

if(field_toggles){
  if (viewport > 1440) {
    choice_group.forEach(function (list, num) {
      if (list.classList.contains("company-choice__group--level")){

      }
      else {
        list.classList.add("company-choice__group--close");
      }
    });

    field_toggles.forEach(function (toggle, num) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        let toggle_current_group = toggle.closest(".company-choice__group");
        toggle_current_group.classList.toggle("company-choice__group--close");
      });
    });
  }
}

let user_search_call = document.querySelectorAll(".user-search__to-call");
if (user_search_call){
  user_search_call.forEach(function (link, num) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
}

let user_choice_add = document.querySelectorAll(".user-choice__add");
if (user_choice_add) {
  user_choice_add.forEach(function (link_add, num) {
    link_add.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
}

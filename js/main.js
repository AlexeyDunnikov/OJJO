$(function () {
  //tabs

  $(".filter-style").styler();
  $(".tab").on("click", function (evt) {
    evt.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find(".tab-item")).removeClass(
      "tab-item--active"
    );
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tab-item--active");
  });

  //open menu

  $(".header__open-menu").on("click", function () {
    $(".phone-nav").addClass("phone-nav--active");
  });

  $(".phone-nav__close-img").on("click", function () {
    $(".phone-nav").removeClass("phone-nav--active");
  });

  //filter drop

  $('.catalog__filter-drop').on('click', function(){
      $(this).toggleClass("catalog__filter-drop--active");
    $(this).next().slideToggle(200);
  })

  //tabs drop

  $(".tabs__drop").on("click", function(){
      $(this).toggleClass("tabs__drop--active");
      $(this).next().slideToggle(200);
  });

  //read-more

  let readMoreBtn = document.querySelector(".read-more__btn");
  let readMoreWrap = document.querySelector(".read-more__wrap");

  readMoreBtn.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (readMoreWrap.classList.contains("read-more__wrap--active")) {
      readMoreBtn.textContent = "читать полностью";
    } else {
      readMoreBtn.textContent = "скрыть";
    }
    readMoreWrap.classList.toggle("read-more__wrap--active");
  });
});

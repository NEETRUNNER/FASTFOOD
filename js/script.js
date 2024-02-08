const slider = tns({ /* Слайдер,для нашей карусели */
  container: '.carousel_inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: true
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
  
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});



  $('[data-modal=tovar_modal]').on('click', function() { /* создания модального окна */
  $('.overlay, #tovar_modal').fadeIn('slow');
});
  $('.overlay_close').on('click', function() {
    $('.overlay, #tovar_modal').fadeOut('slow'); /* Для того чтобы можно было нажать на крестик и закрыть окно */
  });
  $('.dairy_queen').on('click', function() {
    $('.overlay, #tovar_modal').fadeIn('slow');
  });



  $('.cards_block_btn_active').each(function(i) {
    $(this).on('click', function() {
      $('#tovar_modal .overlay_wrapper_title').text($('.cards_block_title').eq(i).text()); /* Смена текста при клике на товар */
        $('.overlay, #towar_modal').fadeIn('slow');
    })
  });

  $('.cards_block_btn_active').each(function(i) {
    $(this).on('click', function() {
      $('#tovar_modal .overlay_wrapper_text').text($('.cards_block_text').eq(i).text()); /* Смена текста при клике на товар */
        $('.overlay, #towar_modal').fadeIn('slow');
    })
  });

new WOW().init();
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
       if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().hide();
       } else {
          $('.select__head').removeClass('open');
          $('.select__popup, .select-orders').hide();
          $(this).addClass('open');
          $(this).next().show();
       }
    });
 
    $('.select').on('click', '.select__item', function () {
       $('.select__head').removeClass('open');
       $(this).parent().parent().hide();
       $(this).parent().parent().prev().text($(this).text());
       $(this).parent().parent().prev().prev().val($(this).text());
    });
 
    $(document).click(function (e) {
       if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__popup, .select-orders').hide();
       }
    });
 });
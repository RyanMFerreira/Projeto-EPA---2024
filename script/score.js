$(document).ready(function () {
  $('.tab-link').click(function () {
    var tabId = $(this).data('tab');

    $('.tab-content').hide();
    $('#' + tabId).slideDown();

    var FirstT = $('#pos');
    if (tabId === '1') {
      FirstT.addClass('topLeftBorder');
    } else {
      FirstT.removeClass('topLeftBorder');
    }


    $('.tab-link').removeClass('tabActive');
    $(this).addClass('tabActive');
  }).first().click();
});
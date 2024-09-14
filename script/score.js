$(document).ready(function () {
  $('.tab-link').click(function () {
    var tabId = $(this).data('tab');

    $('.tab-content').hide();

    $('#' + tabId).fadeIn();

    $('.tab-link').removeClass('active');
    $(this).addClass('active');
  }).first().click();
});
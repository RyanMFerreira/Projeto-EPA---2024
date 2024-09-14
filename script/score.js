$(document).ready(function () {
  $('.tab-link').click(function () {
    var tabId = $(this).data('tab');

    $('.tab-content').hide();

    $('#' + tabId).slideDown();

    $('.tab-link').removeClass('active');
    $(this).addClass('active');
  }).first().click();
});
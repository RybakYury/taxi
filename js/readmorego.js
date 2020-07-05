$(document).ready(function() {
    $('.show_text').on('click', function() {
        if ($(this).prev().is(':visible')) {
            $(this).text('Показать скрытое');
            $(this).prev().hide('slow');
        } else {
            $(this).text('Скрыть показанное');
            $(this).prev().show('slow');
        }
    });
});
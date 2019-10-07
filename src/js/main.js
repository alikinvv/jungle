$('body').on('click', 'a[data-modal], div[data-modal]:not(.modal)', (e) => {
    $('.modal').removeClass('active');
    $('.modals').addClass('active');
    $('.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"]').addClass('active');
});

$('body').on('click', '.modal__close', () => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});

$('body').on('click', '.modals', (e) => {
    if ($(e.target).is('.modals')) {
        $('.modals').removeClass('active');
        $('.modal').removeClass('active');
    }
});
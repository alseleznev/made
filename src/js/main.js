function resizeableInput($input) {
    $input.autoGrowInput({
        minWidth: $input.outerWidth(),
        maxWidth: $input.css('maxWidth'),
        comfortZone: 0,
    });
}

function carousel($carousel) {
    const $ctrlPrev = $carousel.find('.js-ctrl-prev').addClass('invisible');
    const $ctrlNext = $carousel.find('.js-ctrl-next');
    const $items = $carousel.find('.js-items');
    const distance = $carousel.find('.js-wrapper').width();
    const totalPages = $carousel.find('.js-item').length;
    let currentPage = 0;

    $ctrlNext.on('click', () => {
        currentPage++;

        slide($items, distance, true);

        if (currentPage + 1 >= totalPages) {
            $ctrlNext.addClass('invisible');
        } else {
            $ctrlNext.removeClass('invisible');
        }
        $ctrlPrev.removeClass('invisible');
    });

    $ctrlPrev.on('click', () => {
        currentPage--;

        slide($items, currentPage ? distance : 0, false);

        if (currentPage === 0) {
            $ctrlPrev.addClass('invisible');
        } else {
            $ctrlPrev.removeClass('invisible');
        }
        $ctrlNext.removeClass('invisible');
    });
}

function slide($el, distance, right) {
    $el.css('transform', `translateX(${right ? '-' : ''}${distance}px)`);
}

$(document).ready(() => {
    $('.js-resize-input').each((i, el) => resizeableInput($(el)));
    $('.js-carousel').each((i, el) => carousel($(el)));
});

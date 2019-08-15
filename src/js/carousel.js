function slide($el, pageId, distance) {
    const px = pageId * distance;

    $el.css('transform', `translateX(-${px}px)`);
}

export default function carousel($carousel) {
    const $ctrlPrev = $carousel.find('.js-ctrl-prev').addClass('invisible');
    const $ctrlNext = $carousel.find('.js-ctrl-next');
    const $items = $carousel.find('.js-items');
    const distance = $carousel.find('.js-wrapper').width();
    const totalPages = $carousel.find('.js-item').length;
    let currentPage = 0;

    $ctrlNext.on('click', () => {
        currentPage++;

        slide($items, currentPage, distance);

        if (currentPage + 1 >= totalPages) {
            $ctrlNext.addClass('invisible');
        } else {
            $ctrlNext.removeClass('invisible');
        }
        $ctrlPrev.removeClass('invisible');
    });

    $ctrlPrev.on('click', () => {
        currentPage--;

        slide($items, currentPage, distance);

        if (currentPage === 0) {
            $ctrlPrev.addClass('invisible');
        } else {
            $ctrlPrev.removeClass('invisible');
        }
        $ctrlNext.removeClass('invisible');
    });
}

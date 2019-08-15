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

function slide($el, pageId, distance) {
    const px = pageId * distance;

    $el.css('transform', `translateX(-${px}px)`);
}

function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}

$(document).ready(() => {
    $('.js-resize-input').each((i, el) => resizeableInput($(el)));
    $('.js-carousel').each((i, el) => carousel($(el)));

    if (hasTouch()) {
        try {
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
});

$(document).ready(() => {
    $('.js-resize-input').each((i, input) => {
        const el = $(input);

        console.log(el);

        el.autoGrowInput({
            minWidth: el.outerWidth(),
            maxWidth: el.css('maxWidth'),
            comfortZone: 0,
        });
    });
});

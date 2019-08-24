import openApplicationModal from './modalApplication';
import openWorkModal from './modalWork';
import noHover from './noHover';
import initFeedback from './feedback';
import initPortfolio from './portfolio';
import resizeableInput from './resizeableInput';

$(document).ready(() => {
    noHover();

    $('.js-resize-input').each((i, el) => resizeableInput($(el)));
    $('.js-open-application-modal').on('click', openApplicationModal);
    $('.js-scroll-to-prices').on('click', () => {
        const scrollTo = $('.section_8').offset().top;

        $('html,body').animate({
            scrollTop: scrollTo,
        }, 400);
    });

    $.getJSON(`works.json?_=${Date.now()}`, (loadedWorks) => {
        const $portfolioCarousel = $('#portfolio-carousel');
        initPortfolio(
            $portfolioCarousel,
            loadedWorks,
        );

        const $feedbackCarousel = $('#feedback-carousel');
        initFeedback(
            $feedbackCarousel,
            loadedWorks.filter(item => item.feedback),
        );

        $(document).on('click', '.js-open-work', (evt) => {
            const $link = $(evt.currentTarget);
            const workId = $link.data('workId');
            const work = loadedWorks.find(work => work.id === workId);

            if (work) {
                openWorkModal({
                    works: loadedWorks,
                    index: loadedWorks.map(work => work.id).indexOf(workId),
                });
            }
        });
    });
});

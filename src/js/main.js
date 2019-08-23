import openApplicationModal from './applicationModal';
import openWorkModal from './workModal';
import carousel from './carousel';
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
        const $portfolioCarousel = $('#portfolioCarousel');
        initPortfolio(
            $portfolioCarousel.find('.js-items'),
            loadedWorks,
        );
        carousel($portfolioCarousel);

        const $feedbackCarousel = $('#feedbackCarousel');
        initFeedback(
            $feedbackCarousel.find('.js-items'),
            loadedWorks.filter(item => item.feedback),
        );
        carousel($feedbackCarousel);

        $(document).on('click', '.js-open-work', (evt) => {
            const $link = $(evt.currentTarget);
            const workId = $link.data('workId');
            const work = loadedWorks.find(work => work.id === workId);

            if (work) {
                openWorkModal(work);
            }
        });

    });
});

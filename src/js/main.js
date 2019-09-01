import sortBy from 'lodash/sortBy';
import hasTouch from './hasTouch';
import initFeedback from './feedback';
import initForm from './form';
import openApplicationModal from './modalApplication';
import openWorkModal from './modalWork';
import noHover from './noHover';
import initPortfolio from './portfolio';
import resizeableInput from './resizeableInput';

$(document).ready(() => {
    if (hasTouch()) {
        $(document.body).addClass('has-touch');
        noHover();
    }

    const $formWrapper = $('.js-form-wrapper');
    $formWrapper.each((i, el) => initForm($(el)));

    $('.js-resize-input').each((i, el) => resizeableInput($(el)));

    $(document).on('click', '.js-open-application-modal', (evt) => openApplicationModal({
        type: $(evt.currentTarget).data('type'),
    }));
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
            sortBy(loadedWorks.filter(item => item.feedback), 'feedbackOrder'),
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

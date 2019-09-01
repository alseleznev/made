import carousel from './carousel';
import openModal from './modal';
import loadTemplate from './template';

export default function openWorkModal(data) {
    const maxWidth = Math.min($(window).width(), 690 - 20 * 2);
    const template = loadTemplate('work');
    const render = template(data);
    const modal = openModal({
        name: 'work',
        render,
    });

    // modal.$modal.find('.modal-work').css('max-width', maxWidth);

    const $carousel = modal.$modal.find('.js-carousel');
    carousel($carousel, {
        items: 1,
        nav: false,
        dots: true,
        startPosition: data.index,
    });

    return modal;
}

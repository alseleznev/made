import carousel from './carousel';
import openModal from './modal';
import loadTemplate from './template';

export default function openWorkModal(data) {
    const template = loadTemplate('work');
    const render = template(data);
    const modal = openModal({
        name: 'work',
        render,
    });

    const $carousel = modal.$modal.find('.js-carousel');
    carousel($carousel, {
        items: 1,
        nav: false,
        dots: true,
        startPosition: data.index,
    });

    return modal;
}

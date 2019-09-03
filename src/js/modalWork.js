import carousel from './carousel';
import {
    Modal,
} from './modal';
import loadTemplate from './template';

class WorkModal extends Modal {
    constructor(data) {
        const template = loadTemplate('work');
        const render = template(data);

        super({
            name: 'work',
            render,
        });

        this.carouselOptions = {
            items: 1,
            nav: false,
            dots: true,
            startPosition: data.index,
        };
    }

    open() {
        super.open();

        this.$carousel = this.$modal.find('.js-carousel');
        carousel(this.$carousel, this.carouselOptions);

        this.$carousel.on('click', '.js-ctrl-next', () => this.$carousel.trigger('next.owl.carousel'));
        $(document).on('keydown.modalWork', (evt) => {
            switch (evt.keyCode) {
                case 39:
                    this.$carousel.trigger('next.owl.carousel');
                    break;

                case 37:
                    this.$carousel.trigger('prev.owl.carousel');
                    break;
            }
        });
    }

    close() {
        super.close();

        $(document).off('keydown.modalWork');
    }
}

export default function openWorkModal(data) {
    const modal = new WorkModal(data);
    modal.open();

    return modal;
}

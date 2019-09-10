import {
    disableBodyScroll,
    enableBodyScroll,
} from 'body-scroll-lock';
import loadTemplate from './template';

export class Modal {
    constructor(data) {
        this.data = data;
        this.id = Date.now();
        this.scrollTop = $(window).scrollTop();
    }

    open() {
        const template = loadTemplate('modal');
        const render = template(this.data);
        this.$modal = $(render);
        this.scrollTop = $(window).scrollTop();

        $(document.body)
            .addClass('has-modal')
            .append(this.$modal);

        this.$modal.on('click', '.js-close', (evt) => {
            evt.stopPropagation();

            if (evt.target.classList.contains('js-close')) {
                this.close();
            }
        });

        $(document).on(`keydown.${this.id}`, (evt) => {
            if (evt.keyCode === 27) {
                this.close();
            }
        });
    }

    close() {
        $(document.body).removeClass('has-modal');
        window.scrollTo(0, this.scrollTop);

        $(document).off(`keydown.${this.id}`);
        this.$modal.remove();
    }
}

export default function openModal(data) {
    const modal = new Modal(data);
    modal.open();

    return modal;
}

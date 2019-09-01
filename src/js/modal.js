import loadTemplate from './template';

export class Modal {
    constructor(data, callbacks = {}) {
        this.callbacks = callbacks;
        this.data = data;
        this.id = Date.now();
    }

    open() {
        const template = loadTemplate('modal');
        const render = template(this.data);
        this.$modal = $(render);

        $(document.body)
            .addClass('no-scroll')
            .append(this.$modal);

        this.$modal.on('click', '.js-close', () => this.close());

        $(document).on(`keydown.${this.id}`, (evt) => {
            if (evt.keyCode === 27) {
                this.close();
            }
        });

        if (typeof this.callbacks.onOpen === 'function') {
            onOpen();
        }
    }

    close() {
        $(document.body).removeClass('no-scroll');

        $(document).off(`keydown.${this.id}`);
        this.$modal.remove();

        if (typeof this.callbacks.onClose === 'function') {
            onClose();
        }
    }
}

export default function openModal(data) {
    const modal = new Modal(data);
    modal.open();

    return modal;
}

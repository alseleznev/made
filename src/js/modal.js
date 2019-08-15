import loadTemplate from './template';

export default function openModal(data) {
    const template = loadTemplate('modal');
    const render = template(data);
    const $modal = $(render);

    $(document.body).append($modal);

    $modal.on('click', '.js-close', () => $modal.remove());

    return $modal;
}

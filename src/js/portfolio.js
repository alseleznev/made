import chunk from 'lodash/chunk';
import carousel from './carousel';
import loadTemplate from './template';

export default function portfolio($placeholder, items) {
    const template = loadTemplate('portfolio');
    const windowWidth = $(window).width();
    const chunkSize = windowWidth > 600 ? 4 : 2;
    const chunks = chunk(items, chunkSize);
    const render = template({
        chunks,
    });

    $placeholder.html(render);

    carousel($placeholder, {
        items: 1,
        nav: true,
        dots: false,
    });
}

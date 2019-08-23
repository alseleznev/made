import chunk from 'lodash.chunk';
import loadTemplate from './template';

export default function portfolio($placeholder, items) {
    const template = loadTemplate('portfolio');
    const chunks = chunk(items, 4);
    const render = template({
        chunks,
    });

    $placeholder.html(render);
}

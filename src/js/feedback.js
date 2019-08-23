import loadTemplate from './template';

export default function feedback($placeholder, items) {
    const template = loadTemplate('feedback');
    const render = template({
        items,
    });

    $placeholder.html(render);
}

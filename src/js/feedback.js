import carousel from './carousel';
import loadTemplate from './template';

export default function feedback($placeholder, items) {
    const template = loadTemplate('feedback');
    const render = template({
        items,
    });

    $placeholder.html(render);

    carousel($placeholder, {
        items: 1,
        nav: true,
        dots: false,
    });
}

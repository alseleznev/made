import loadTemplate from './template';
import openModal from './modal';

export default function openWorkModal(data) {
    const template = loadTemplate('work');
    const render = template(data);

    return openModal({
        name: 'work',
        render,
    });
}

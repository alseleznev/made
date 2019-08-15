import loadTemplate from './template';
import openModal from './modal';

export default function openApplicationModal(data) {
    const template = loadTemplate('application');
    const render = template(data);

    return openModal({
        name: 'application',
        render,
    });
}

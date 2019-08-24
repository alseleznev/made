import initForm from './form';
import openModal from './modal';
import loadTemplate from './template';

export default function openApplicationModal(data) {
    const template = loadTemplate('application');
    const render = template(data);

    const modal = openModal({
        name: 'application',
        render,
    });

    initForm(modal.$modal.find('.js-form-wrapper'));
    modal.$modal.find('input:first').focus();

    return modal;
}

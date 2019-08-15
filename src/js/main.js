import Handlebars from 'handlebars/dist/handlebars';
import carousel from './carousel';
import noHover from './noHover';
import resizeableInput from './resizeableInput';

$(document).ready(() => {
    $('.js-resize-input').each((i, el) => resizeableInput($(el)));
    $('.js-carousel').each((i, el) => carousel($(el)));

    noHover();

    const modelTemplate = document.getElementById('template-modal').innerHTML;
    const applicationTemplate = document.getElementById('template-application').innerHTML;
    const renderModal = Handlebars.compile(modelTemplate);
    const renderApplicationModal = () => {
        const modal = renderModal({
            modal: {
                name: 'modal-application',
                content: Handlebars.compile(applicationTemplate)(),
            },
        });

        return $(document.body).append(modal);
    };

    const formModal = renderApplicationModal();
    console.log(formModal);

});

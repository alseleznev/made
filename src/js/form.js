const SUBMIT_URL = 'submit/url';

function processFormInput($input) {
    $input
        .closest('.js-input')
        .toggleClass('invalid', $input.val().length === 0);
}

function toggleFormValid($formWrapper) {
    const $form = $formWrapper.find('.js-form');
    const isFormValid = $formWrapper.find('.js-input.invalid').length === 0;

    $formWrapper.find('.js-submit').toggleClass('disabled', !isFormValid);
    $formWrapper.find('.js-error').toggleClass('invisible', isFormValid);
    $form.toggleClass('invalid', !isFormValid);

    return isFormValid;
}

function processFormSubmit($formWrapper) {
    const $form = $formWrapper.find('.js-form');
    $form.find('.js-input input,textarea').each((i, input) => {
        processFormInput($(input));
    });

    const isFormValid = toggleFormValid($formWrapper);
    if (isFormValid) {
        const formHeight = $form.height();
        $formWrapper
            .find('.js-success')
            .removeClass('hidden')
            .height(formHeight);

        $form.addClass('hidden');

        const formData = $form.serialize();
        $.post({
            url: SUBMIT_URL,
            data: formData,
        });
    }
}

export default function initForm($formWrapper) {
    $formWrapper.find('.js-form').attr('novalidate', true);

    $formWrapper
        .on('input', '.js-form.invalid .js-input input,textarea', (evt) => {
            processFormInput($(evt.currentTarget));
            toggleFormValid($formWrapper);
        })
        .on('submit', '.js-form', (evt) => {
            evt.preventDefault();
            processFormSubmit($formWrapper);
        });
}

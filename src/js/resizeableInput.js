import './plugins/jquery.auto-grow-input'

export default function resizeableInput($input) {
    $input.autoGrowInput({
        minWidth: $input.outerWidth(),
        maxWidth: $input.css('maxWidth'),
        comfortZone: 0,
    });
}

const inputArr = Array.from(document.getElementsByClassName('input-resize-js'));
const hide = document.getElementById('hide');
const hideSmall = document.getElementById('hide-small');

function checkInputWidth(target, self = true) {
    const input = self ? this : target;
    const hideInput = input.clientHeight > 40 ? hide : hideSmall;

    hideInput.textContent = input.value;
    input.style.width = hideInput.offsetWidth + "px";
}

inputArr.forEach(input => {
    checkInputWidth(input, false);

    input.addEventListener('input', checkInputWidth);
});

const observerCollection = document.getElementsByClassName('observer');
Array.from(observerCollection).forEach(item => {
    const observer = new MutationObserver(() => inputArr.forEach(input => checkInputWidth(input, false)));

    observer.observe(item, { attributes: true });
});

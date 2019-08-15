import Handlebars from 'handlebars/dist/handlebars';

const templateMap = new Map();

export default function loadTemplate(name) {
    if (!templateMap.has(name)) {
        const template = document.getElementById(`template-${name}`).innerHTML;
        const compiled = Handlebars.compile(template);

        templateMap.set(name, compiled);
    }

    return templateMap.get(name);
}

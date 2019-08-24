function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}

export default function noHover() {
    if (hasTouch()) {
        try {
            for (let si in document.styleSheets) {
                const styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) {
                    continue;
                }

                for (let ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) {
                        continue;
                    }

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
}

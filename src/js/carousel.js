import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import hasTouch from './hasTouch';

export default function carousel($carousel, options) {
    const supportsTouch = hasTouch();

    return $carousel.owlCarousel({
        navText: '',
        loop: true,
        margin: 5,
        mouseDrag: supportsTouch,
        touchDrag: supportsTouch,
        pullDrag: supportsTouch,
        freeDrag: supportsTouch,
        ...options,
    });
}

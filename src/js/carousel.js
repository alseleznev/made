import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export default function carousel($carousel, options) {
    return $carousel.owlCarousel({
        navText: '',
        loop: true,
        margin: 5,
        ...options,
    });
}

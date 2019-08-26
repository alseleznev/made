import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export default function carousel($carousel, options) {
    $carousel.owlCarousel({
        navText: '',
        loop: true,
        ...options,
    });
}

import { SALON_GALLERY_PHOTOS } from '../data/salonGalleryPhotos';
import { HeroSalonCarousel } from './HeroSalonCarousel';
import './SalonGallery.css';

export function SalonGallery() {
  return (
    <section className="salon-gallery lp-section" aria-label="店内・施術の写真">
      <div className="lp-section__inner">
        <p className="salon-gallery__label lp-caption">店内のようす</p>
        <HeroSalonCarousel photos={SALON_GALLERY_PHOTOS} />
      </div>
    </section>
  );
}

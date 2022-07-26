import PropTypes, { arrayOf } from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from '../ImageGallery/ImageGallery.module.css';
import { shape } from 'prop-types';
export const ImageGallery = ({ gallery, openModal }) => {
  return (
    <ul className={style.ImageGallery}>
      {gallery.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            bigImg={largeImageURL}
            smallImg={webformatURL}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func.isRequired,
};

import style from '../ImageGalleryItem/ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ bigImg, smallImg, openModal }) => {
  return (
    <li className={style.ImageGalleryItem} onClick={() => openModal(bigImg)}>
      <img className={style.ImageGalleryItemImage} src={smallImg} alt="Img" />
    </li>
  );
};

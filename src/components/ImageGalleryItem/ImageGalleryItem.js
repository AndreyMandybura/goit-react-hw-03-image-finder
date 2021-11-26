import PropTypes from "prop-types";
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ img: {
    tags,
    webformatURL,
    onClick,
  largeImageURL,
}, 
}) {
  return (
      <li className={s.ImageGalleryItem}
      onClick={() => onClick({ largeImageURL })}
    >
          <img className={s.ImageGalleryItem_image} src={webformatURL} alt={tags} />
    </li>
  );
}

export default ImageGalleryItem;
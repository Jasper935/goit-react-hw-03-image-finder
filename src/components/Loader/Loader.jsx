import { Audio } from 'react-loader-spinner';
import style from '../Loader/Loader.module.css';
export const Loader = () => {
  return (
    <div className={style.loader}>
      <Audio
        height="170"
        width="170"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

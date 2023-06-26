//src
import styles from './ImageBackground.module.scss';

//lib
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ImageBackground() {
    return <div className={cx('background')}></div>;
}

export default ImageBackground;

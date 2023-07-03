//src
import styles from './MainLogo.module.scss';
import images from '~/assets/imgs';

//lib
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MainLogo({ small, large, className }) {
    return (
        <img
            className={cx('logo', { [className]: [className], small, large })}
            src={images.logo}
            alt="football-world-logo"
        />
    );
}

export default MainLogo;

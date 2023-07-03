//src
import images from '~/assets/imgs';
import styles from './Slider.module.scss';

//lib
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const sliderImages = [images.slider1, images.slider2, images.slider3];

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                {sliderImages.map((img, index) => {
                    return <img key={index} src={img} alt="" />;
                })}
            </div>
        </div>
    );
}

export default Slider;

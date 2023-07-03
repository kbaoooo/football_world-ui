//src
import styles from './RightSidebar.module.scss';

//lib
import classNames from 'classnames/bind';
import Slider from './Slider/Slider';
import Extensions from './Extensions';

const cx = classNames.bind(styles);

function RightSidebar() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <Extensions/>
        </div>
    );
}

export default RightSidebar;

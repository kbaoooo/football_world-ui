//src
import styles from './Sidebar.module.scss';
import Menu from './Menu';

//lib
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu />
        </div>
    );
}

export default Sidebar;

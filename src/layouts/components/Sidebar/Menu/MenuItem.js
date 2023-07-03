//src
import styles from './Menu.module.scss';

//lib
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, to }) {
    return (
        <div className={cx('wrapper-item')}>
            <Link className={cx('item-link')} to={to}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('title')}>{title}</span>
            </Link>
        </div>
    );
}

export default MenuItem;

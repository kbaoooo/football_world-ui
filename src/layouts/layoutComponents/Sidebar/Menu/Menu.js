//src
import styles from './Menu.module.scss';

//lib
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routesConfig } from '~/configs';

const cx = classNames.bind(styles);

function Menu() {
    const handleClick = () => {};

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('menu')}>
                <li className={cx('menu-item')}>
                    <Link className={cx('menu-link')} to={routesConfig.home}>
                        <span className={cx('title')}>Home</span>
                    </Link>
                </li>
                <li className={cx('menu-item')}>
                    <Link className={cx('menu-link')} to={routesConfig.players}>
                        <span className={cx('title')}>Players</span>
                    </Link>
                </li>
                <li className={cx('menu-item')}>
                    <Link className={cx('menu-link')} to={routesConfig.kits}>
                        <span className={cx('title')}>Kits</span>
                    </Link>
                </li>
                <li className={cx('menu-item')}>
                    <Link className={cx('menu-link')} to={routesConfig.clubs}>
                        <span className={cx('title')}>Clubs</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;

//src
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import SidebarLogo from './Logo';
import { routesConfig } from '~/configs';

//lib
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faGear, faHeart, faHome, faPeopleGroup, faShirt, faUsers } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MENU_TOP = [
    { route: routesConfig.home, title: 'Home', icon: <FontAwesomeIcon icon={faHome} /> },
    { route: routesConfig.players, title: 'Players', icon: <FontAwesomeIcon icon={faFutbol} /> },
    { route: routesConfig.kits, title: 'Kits', icon: <FontAwesomeIcon icon={faShirt} /> },
    { route: routesConfig.clubs, title: 'Clubs', icon: <FontAwesomeIcon icon={faPeopleGroup} /> },
];

const MENU_BOTTOM = [
    { route: routesConfig.home, title: 'Favourites', icon: <FontAwesomeIcon icon={faHeart} /> },
    { route: routesConfig.home, title: 'Settings', icon: <FontAwesomeIcon icon={faGear} /> },
    { route: routesConfig.home, title: 'About Us', icon: <FontAwesomeIcon icon={faUsers} /> },
];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>
                <Menu borderRadiusTop data={MENU_TOP} />
                <SidebarLogo />
                <Menu borderRadiusBottom data={MENU_BOTTOM} />
            </div>
        </div>
    );
}

export default Sidebar;

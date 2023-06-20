//src
import styles from './Header.module.scss';
import images from '~/assets/imgs';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from './Search';
import { routesConfig } from '~/configs';

//lib
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faEllipsisVertical,
    faGear,
    faHeart,
    faLanguage,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import Button from '~/components/Button';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        text: 'Vietnamese',
        children: {
            title: 'Languages',
            data: [
                { type: 'languaes', code: 'vi', text: 'Vietnamese' },
                { type: 'languaes', code: 'eng', text: 'English' },
                { type: 'languaes', code: 'Brazil', text: 'Brazilian' },
                { type: 'languaes', code: 'German', text: 'Germany' },
                { type: 'languaes', code: 'Japan', text: 'Japanese' },
                { type: 'languaes', code: 'Idia', text: 'Indian' },
                { type: 'languaes', code: 'vi', text: 'Vietnamese' },
                { type: 'languaes', code: 'eng', text: 'English' },
                { type: 'languaes', code: 'Brazil', text: 'Brazilian' },
                { type: 'languaes', code: 'German', text: 'Germany' },
                { type: 'languaes', code: 'Japan', text: 'Japanese' },
                { type: 'languaes', code: 'Idia', text: 'Indian' },
                { type: 'languaes', code: 'vi', text: 'Vietnamese' },
                { type: 'languaes', code: 'eng', text: 'English' },
                { type: 'languaes', code: 'Brazil', text: 'Brazilian' },
                { type: 'languaes', code: 'German', text: 'Germany' },
                { type: 'languaes', code: 'Japan', text: 'Japanese' },
                { type: 'languaes', code: 'Idia', text: 'Indian' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        text: 'Setting',
        to: '/setting',
    },
];

const LOGIN_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faAddressCard} />,
        text: 'View Profile',
        to: '/viewprofile',
    },
    {
        icon: <FontAwesomeIcon icon={faHeart} />,
        text: 'Favourite',
        to: '/favourite',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        text: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [isLogIn, setIsLogIn] = useState(true);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'languages':
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <Image src={images.logo} alt="" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {isLogIn ? (
                        <Fragment>
                            <Tippy content="Build my team" placement="bottom" delay={[0, 200]}>
                                <Button primary>My team</Button>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button text_type>Login</Button>
                        </Fragment>
                    )}
                    <Menu hideOnClick={false} items={isLogIn ? LOGIN_MENU_ITEMS : MENU_ITEMS} onChange={handleMenuChange}>
                        {isLogIn ? (
                            <Image className={cx('login-avatar')} src={images.loginAvatar} alt="Neymar JR" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

//src
import styles from './Header.module.scss';
import images from '~/assets/imgs';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchResults from '~/components/SearchResults';
import Menu from '~/components/Popper/Menu';

//lib
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faCircleXmark,
    faEllipsisVertical,
    faGear,
    faHeart,
    faLanguage,
    faMagnifyingGlass,
    faRightFromBracket,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import { Fragment } from 'react';

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
        separate: true
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLogIn, setIsLogIn] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'languaes':
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </div>
                <HeadlessTippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => {
                        return (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h3 className={cx('search-title')}>Results</h3>
                                    <SearchResults />
                                    <SearchResults />
                                    <SearchResults />
                                    <SearchResults />
                                    <SearchResults />
                                </PopperWrapper>
                            </div>
                        );
                    }}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Search here..."
                            spellCheck={false}
                            value={searchValue}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                        <button type="" className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading-icon')} />
                        <button type="" className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {isLogIn ? (
                        <Fragment>
                            <Tippy content="Build my team" placement="bottom" delay={[0, 200]}>
                                <span>
                                    <Button primary>My team</Button>
                                </span>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button text_type>Login</Button>
                        </Fragment>
                    )}
                    <Menu items={isLogIn ? LOGIN_MENU_ITEMS : MENU_ITEMS} onChange={handleMenuChange}>
                        {isLogIn ? (
                            <img className={cx('login-avatar')} src={images.loginAvatar} alt="Neymar JR" />
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

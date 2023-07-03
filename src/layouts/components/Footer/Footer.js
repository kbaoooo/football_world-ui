//src
import MainLogo from '~/components/MainLogo';
import styles from './Footer.module.scss';
import Header from './Header';

//lib
import classNames from 'classnames/bind';
import { routesConfig } from '~/configs';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <section className={cx('section-outter')}>
                <section className={cx('row')}>
                    <section className={cx('col')}>
                        <Header
                            className={cx('header')}
                            logo={<MainLogo />}
                            to={routesConfig.home}
                            title="Football World"
                        />
                        <div className={cx('content')}>
                            <p className={cx('contact')}>
                                Tel:
                                <a href="tel:0386204932"> 0386.204.932</a>
                                <br />
                                Email:
                                <a href="mailto:nbkhanh124@gmail.com"> nbkhanh124@gmail.com</a>
                                <br />
                                Address: c8 TT Kim Liên, Phường Kim Liên, Quận Đống Đa, TP. Hà Nội
                            </p>
                        </div>
                    </section>
                    <section className={cx('col')}>
                        <Header className={cx('header')} title="About Us" />
                        <div className={cx('content')}>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>
                                    <a href="#path">Introduce</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="#path">Contact</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="#path">Rules</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="#path">Security</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className={cx('col')}>
                        <Header className={cx('header')} title="Products" />
                        <div className={cx('content')}>
                            <ul className={cx('list')}>
                                <li className={cx('item')}></li>
                                <li className={cx('item')}>
                                    <a href="#path">Tiktok Clone</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="#path">Football World</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="#path">Coffee</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className={cx('col')}>
                        <Header className={cx('header')} title="Content" />
                        <div className={cx('content')}>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>
                                    <a href="#path">Football Players</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="#path">Football</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="#path">Football news</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="#path">News Kits</a>
                                </li>
                                <li className={cx('item')}>
                                    <a href="#path">Matches</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className={cx('col')}>
                        <Header className={cx('header')} title="technology company kbao" />
                        <div className={cx('content')}>
                            <p className={cx('contact')}>
                                Tax code: 1234567890
                                <br />
                                Founding: 03/07/2023
                                <br />
                                Industry: Technology, programming,<br/>news, sports, football. We build and develop develop
                                products that bring value to the community.
                            </p>
                        </div>
                    </section>
                </section>
                <section className={cx('row')}></section>
            </section>
        </footer>
    );
}

export default Footer;

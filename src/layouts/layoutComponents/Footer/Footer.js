//src
import styles from './Footer.module.scss';
import Header from './Header';

//lib
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FooterInfo = [
    {
        header: <Header/>,
        content: []
    }
];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <table>
                <tr></tr>
            </table>
        </div>
    );
}

export default Footer;

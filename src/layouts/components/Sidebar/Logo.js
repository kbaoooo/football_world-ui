//src
import styles from './Sidebar.module.scss';
import MainLogo from '~/components/MainLogo';

//lib
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SidebarLogo() {
    return (
        <div className={cx('logo-wrapper')}>
            <MainLogo />
            <p className={cx('text')}><i>Football World</i></p>
        </div>
    );
}

export default SidebarLogo;

//src
import { Header, Sidebar } from '../components';
import styles from './DefaultLayout.module.scss';

//lib
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import RightSidebar from './RightSidebar';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <RightSidebar />
            </div>
            <Footer/>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;

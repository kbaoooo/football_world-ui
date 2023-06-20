//src
import { Header, Sidebar } from "../layoutComponents";
import styles from './DefaultLayout.module.scss'

//lib
import classNames from "classnames/bind";
const cx = classNames.bind(styles);


function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

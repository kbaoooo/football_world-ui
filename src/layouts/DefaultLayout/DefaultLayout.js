//src
import { Header, Sidebar } from '../layoutComponents';
import styles from './DefaultLayout.module.scss';
import ImageBackground from '../layoutComponents/ImageBackground';

//lib
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const headerRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPage);

        return () => {
            window.removeEventListener('scroll', handleScrollPage);
        };
    }, []);

    const handleScrollPage = () => {
        const header = headerRef.current;
        const headerHeight = header.offsetHeight;
        const currentYOffSet = window.scrollY;
        const targetPoint = window.innerHeight - headerHeight;
        
        if (currentYOffSet > targetPoint) {
            header.style.transform = `translateY(-${headerHeight}px)`;
        } else {
            header.style.transform = 'translateY(0)';
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Header ref={headerRef} />
            <ImageBackground />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;

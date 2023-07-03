//src
import styles from './Header.module.scss';

//lib
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header({ title, logo, to, className }) {
    return (
        <div className={cx('wrapper', { [className]: [className] })}>
            {logo ? (
                <Link to={to} className={cx('logo')}>
                    {logo}
                </Link>
            ) : (
                false
            )}
            <h3 className={cx('title')}>{title}</h3>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.node,
    to: PropTypes.string,
};

export default Header;

//src
import styles from './Item.module.scss';

//lib
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Item({ icon, title, subTitle, className, dashed, green, red, to }) {
    let Component = 'div';
    if(to) {
        Component = Link
    }
    return (
        <Component
            to={to}
            className={cx('wrapper', {
                dashed,
                [className]: [className]
            })}
        >
            <span
                className={cx('icon-box', {
                    red,
                    green,
                })}
            >
                {icon}
            </span>
            <span className={cx('content')}>
                <p className={cx('title')}>{title}</p>
                <p className={cx('sub-title')}>{subTitle}</p>
            </span>
        </Component>
    );
}

Item.propsTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    dashed: PropTypes.bool,
    red: PropTypes.bool,
    green: PropTypes.bool,
    to: PropTypes.string,
};

export default Item;

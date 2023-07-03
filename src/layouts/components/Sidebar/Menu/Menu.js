//src
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

//lib
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Menu({ borderRadiusTop, borderRadiusBottom, data = [] }) {
    const renderItems = () =>
        data.map((item, index) => {
            return <MenuItem key={index} to={item.route} title={item.title} icon={item.icon} />;
        });

    return (
        <div
            className={cx('wrapper', {
                borderRadiusTop,
                borderRadiusBottom,
            })}
        >
            {renderItems()}
        </div>
    );
}

Menu.propTypes = {
    borderRadiusTop: PropTypes.bool,
    borderRadiusBottom: PropTypes.bool,
    data: PropTypes.array.isRequired,
};

export default Menu;

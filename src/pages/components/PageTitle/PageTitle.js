//src
import styles from './PageTitle.module.scss';

//lib
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function PageTitle({ content }) {
    return <h2 className={cx('title')}>{content}</h2>;
}

PageTitle.propTypes = {
    content: PropTypes.string.isRequired,
};

export default PageTitle;

//src
import styles from './ChangeTheme.module.scss';

//lib
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function ChangeTheme() {

    const handleChangeTheme = () => {
        document.body.classList.toggle("dark-theme")
    }

    return (
        <div className={cx('wrapper')}>
            <input
                type="checkbox"
                className={cx('checkbox')}
                id="checkbox"
                onChange={handleChangeTheme}
            />
            <label htmlFor="checkbox" className={cx('checkbox-label')}>
                <FontAwesomeIcon icon={faMoon} className={cx('moon')} />
                <FontAwesomeIcon icon={faSun} className={cx('sun')} />
                <span className={cx('ball')}></span>
            </label>
        </div>
    );
}

export default ChangeTheme;

//src
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AddReminder.module.scss';

//lib
import classNames from 'classnames/bind';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AddReminder() {
    return (
        <button className={cx('wrapper')}>
            <div className={cx('content')}>
                <FontAwesomeIcon icon={faPlus} />
                <p className={cx('title')}>Add Reminder</p>
            </div>
        </button>
    );
}

export default AddReminder;

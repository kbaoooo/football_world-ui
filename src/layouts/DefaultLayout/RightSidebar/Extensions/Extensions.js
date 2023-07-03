//src
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from './Item';
import styles from './Extensions.module.scss';
import PageTitle from '~/pages/components/PageTitle';

//lib
import classNames from 'classnames/bind';
import { faBell, faEye } from '@fortawesome/free-solid-svg-icons';
import { routesConfig } from '~/configs';
import AddReminder from './Item/AddReminder/AddReminder';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <div className={cx('wrapper')}>
            <PageTitle content='Extensions'/>
            <Item
                icon={<FontAwesomeIcon icon={faEye} />}
                title={'Watch football matches'}
                subTitle={'Click to see football schedule'}
                green
                to={routesConfig.home}
            />
            <Item 
                icon={<FontAwesomeIcon icon={faBell} />} 
                title={'Reminder'} 
                subTitle={'Thusday 10:00pm'} 
                red
            />
            <AddReminder />
        </div>
    );
}

export default Notification;

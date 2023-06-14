//lib
import classNames from 'classnames/bind';

//src
import Button from "~/components/Button";
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({data, onClick}) {
    const classes = cx('item', {
        separate: data.separate
    })
    return(
        <Button leftIcon={data.icon} className={classes} to={data.to} onClick={onClick}>
            {data.text}
        </Button>
    );
}

export default MenuItem;
//src
import styles from './SearchResults.module.scss'
import Image from '../Image';
import { publicRoutes } from '~/routes';

//lib
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchResults({data}) {
    return(
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.name}/>
            <div className={cx('info')}>
                <p className={cx('name')}>{data.first_name}</p>
                <p className={cx('country')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default SearchResults;
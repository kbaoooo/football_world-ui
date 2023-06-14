//src
import styles from './SearchResults.module.scss'
import images from '~/assets/imgs';

//lib
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SearchResults() {
    return(
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.searchResultsAvatar} alt="Neymar JR"/>
            <div className={cx('info')}>
                <p className={cx('name')}>Neymar JR</p>
                <p className={cx('country')}>Brasil</p>
            </div>
        </div>
    );
}

export default SearchResults;
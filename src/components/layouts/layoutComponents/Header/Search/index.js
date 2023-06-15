//src
import styles from './Seach.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchResults from '~/components/SearchResults';

//lib
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <HeadlessTippy
            interactive={true}
            visible
            render={(attrs) => {
                return (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Results</h3>
                            <SearchResults />
                            <SearchResults />
                            <SearchResults />
                            <SearchResults />
                            <SearchResults />
                        </PopperWrapper>
                    </div>
                );
            }}
        >
            <div className={cx('search')}>
                <input
                    type="text"
                    placeholder="Search here..."
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
                <button type="" className={cx('clear-btn')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon icon={faSpinner} className={cx('loading-icon')} />
                <button type="" className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;

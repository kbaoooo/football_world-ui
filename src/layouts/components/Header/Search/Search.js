//src
import styles from './Seach.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchResults from '~/components/SearchResults/SearchResults';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiServices/searchService';

//lib
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isFocus, setIsFocus] = useState(true);
    const [loading, setLoading] = useState(false);

    const lastSearchValue = useDebounce(searchValue, 650);

    const inputRef = useRef();

    useEffect(() => {
        if (!lastSearchValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(lastSearchValue);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastSearchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setIsFocus(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        } else {
            return;
        }
    };

    const handleSearch = (e) => {};

    return (
        <span>
            <HeadlessTippy
                interactive={true}
                visible={isFocus && searchResult.length > 0}
                render={(attrs) => {
                    return (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Results</h3>
                                {searchResult.map((acc) => {
                                    return <SearchResults key={acc.id} data={acc} />;
                                })}
                            </PopperWrapper>
                        </div>
                    );
                }}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search here..."
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => {
                            setIsFocus(true);
                        }}
                    />
                    {!!searchValue && !loading && (
                        <button type="" className={cx('clear-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading-icon')} />}
                    <button
                        type=""
                        className={cx('search-btn')}
                        onClick={handleSearch}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </span>
    );
}

export default Search;

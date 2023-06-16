//src
import styles from './Seach.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchResults from '~/components/SearchResults';
import { useDebounce } from '~/hooks';

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
            setSearchResult([])
            return;
        }

        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(lastSearchValue)}&type=less`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
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

    return (
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
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
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
                <button type="" className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;

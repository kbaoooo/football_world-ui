//src
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

//lib
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, hideOnClick = true }) {
    const [listItem, setListItem] = useState([{ data: items }]);
    const current = listItem[listItem.length - 1];

    const handleResetToFirstPage = () => {
        setListItem((prev) => {
            return prev.slice(0, 1);
        });
    };

    const handleBack = () => {
        setListItem((prev) => {
            return prev.slice(0, prev.length - 1);
        });
    };

    const renderItems = () => {
        //useMemo
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setListItem((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <HeadlessTippy
            hideOnClick={hideOnClick}
            onHide={handleResetToFirstPage}
            delay={[0, 700]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => {
                return (
                    <div className={cx('menu')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {listItem.length > 1 && <Header title={current.title} onBack={handleBack} />}
                            <div className={cx('menu-body')}>{renderItems()}</div>
                        </PopperWrapper>
                    </div>
                );
            }}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;

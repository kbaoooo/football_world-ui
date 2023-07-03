//src
import styles from './Card.module.scss';
import Image from '~/components/Image';
import { HeartRegularIcon } from '~/assets/Icons';
import { HeartSolidIcon } from '~/assets/Icons';

//lib
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { routesConfig } from '~/configs';
import { useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Card({ data }) {
    const desc = !!data.desc;
    const iconRef = useRef();
    const [favour, setFavour] = useState(false);

    const handleClick = () => {
        setFavour(!favour);
    };

    return (
        <div className={cx('wrapper')} to={data.to}>
            <div className={cx('image-outer', {
                desc
            })}>
                <Image src={data.image} alt="" className={cx('image')} />
            </div>
            <div className={cx('info')}>
                <h3 className={cx('title')}>{data.name}</h3>
                {desc ? (
                    <span className={cx('desc')}>
                        <p>Clubs: {data.desc.club}</p>
                        <p>Nationality: {data.desc.nationality}</p>
                    </span>
                ) : (
                    false
                )}
                <Link to={routesConfig.detailPlayers} className={cx('link')}>
                    See more
                </Link>
            </div>
            {!favour ? (
                <Tippy content="Add to favourite" placement="bottom">
                    <HeartRegularIcon ref={iconRef} className={cx('regular-icon')} onClick={handleClick} />
                </Tippy>
            ) : (
                <HeartSolidIcon className={cx('solid-icon')} onClick={handleClick} />
            )}
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Card;

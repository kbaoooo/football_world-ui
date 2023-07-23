//src
import styles from './SearchResults.module.scss';
import Image from '../Image/Image';

//lib
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SearchResults({ data }) {

    const [img, setImg] = useState('');

    function handleImg() {
        fetch(data.player_image)
            .then((res) => {
                if(res.status === 200) {
                    setImg(res.url)     
                } else {
                    setImg('')
                }
            })
            .catch((err) => {
                console.log('Err');
            });
    }

    useEffect(() => {
        if (data.player_image.length > 0) {
            handleImg();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Link className={cx('wrapper')} to={`/@${data.player_name}`}>
            <Image className={cx('avatar')} src={img} alt={data.player_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>{data.player_name}</p>
                <p className={cx('country')}>{data.team_name}</p>
            </div>
        </Link>
    );
}

SearchResults.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SearchResults;

//src
import images from '~/assets/imgs';
import styles from './image.module.scss';

//lib
import { forwardRef } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, className, alt, replaceImage = images.noImage, ...props }, ref) => {
    const [_replaceImage, setReplaceImage] = useState('');

    const handleError = () => {
        setReplaceImage(replaceImage);
    };

    return (
        <img
            ref={ref}
            src={src || _replaceImage}
            alt={alt}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    replaceImage: PropTypes.string,
};

export default Image;

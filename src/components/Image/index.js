//src
import images from '~/assets/imgs';
import styles from './image.module.scss';

//lib
import { forwardRef } from 'react';
import { useState } from 'react';
import classNames from 'classnames';

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

export default Image;

//src
import styles from './Button.module.scss';

//lib
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            primary = false,
            outline = false,
            small = false,
            text_type = false,
            large = false,
            rounded = false,
            disabled = false,
            leftIcon = false,
            rightIcon = false,
            customStyle = false,
            to,
            href,
            onClick,
            children,
            className,
            ...passProps
        },
        ref,
    ) => {
        let Component = 'button';

        const props = {
            onClick,
            ...passProps,
        };

        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props.key;
                }
            });
        }

        if (to || text_type) {
            props.to = to;
            Component = Link;
        } else if (href) {
            props.href = href;
            Component = 'a';
        }

        const classes = cx('wrapper', {
            primary,
            outline,
            small,
            large,
            text_type,
            rounded,
            customStyle,
            leftIcon,
            rightIcon,
            disabled,
            [className]: className,
        });

        return (
            <Component ref={ref} className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Component>
        );
    },
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    text_type: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    customStyle: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;

import React, { ReactElement, ReactChildren, ReactChild } from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

// components
import ButtonLoader from 'components/Shared/Button/ButtonLoader';
import styled from 'styled-components';

type ButtonType = {
    loading?: boolean;
    active?: boolean;
    block?: boolean;
    variant?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'dark'
        | 'light'
        | 'link'
        | 'outline-primary'
        | 'outline-secondary'
        | 'outline-success'
        | 'outline-danger'
        | 'outline-warning'
        | 'outline-info'
        | 'outline-dark'
        | 'outline-light';
    size?: 'sm' | 'lg';
    type?: 'button' | 'reset' | 'submit';
    href?: string;
    disabled?: boolean;
    children: ReactChildren | ReactChild | string;
    className?: string;
};

const Button = styled(BootstrapButton)`
    min-height: 60px;
    font-size: 20px;
    font-weight: bold;
`;

export default (props: ButtonType): ReactElement => {
    const {
        variant,
        active,
        block,
        size,
        type,
        href,
        disabled,
        loading,
        children,
        className
    } = props;

    return (
        <Button
            className={className}
            variant={variant}
            active={active}
            block={block}
            size={size}
            type={type}
            href={href}
            disabled={disabled || loading}
        >
            {loading && (
                <ButtonLoader>
                    <Spinner animation='border' size='sm' />
                </ButtonLoader>
            )}
            {children}
        </Button>
    );
};

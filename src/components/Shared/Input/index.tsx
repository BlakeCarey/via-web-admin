import React, { ReactElement } from 'react';
import styled from 'styled-components';

// components
import InputControl from 'components/Shared/Input/InputControl';

export type PropTypes = {
    name: string;
    variant: 'text' | 'number' | 'password';
    placeholder: string;
    label: string;
    valid: boolean | undefined;
    onChange: any;
    value: string | undefined;
    error?: string | undefined;
    required?: boolean;
    onBlur?: any;
    className?: string | undefined;
    hideLabel?: boolean;
};

const Input = styled(InputControl)`
    min-height: 60px;
    font-size: 20px;
    font-weight: bold;
`;

export default (props: PropTypes): ReactElement => {
    const { variant, onBlur, ...rest } = props;

    return <Input type={variant} {...rest} onBlur={onBlur} />;
};

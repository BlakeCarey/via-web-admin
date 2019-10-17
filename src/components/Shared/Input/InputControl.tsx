import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Feedback from 'react-bootstrap/Feedback';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Label from 'react-bootstrap/FormLabel';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// types
type PropTypes = {
    placeholder: string;
    name: string;
    type: 'text' | 'number' | 'password';
    label: string;
    valid: boolean | undefined;
    onChange: any;
    onBlur: any;
    value: string | undefined;
    error?: string | undefined;
    required?: boolean;
    className?: string | undefined;
    hideLabel?: boolean;
};

type State = {
    show?: boolean;
};

class Input extends Component<PropTypes, State> {
    constructor(props: PropTypes) {
        super(props);
        // initial state
        this.state = {
            show: false
        };

        // bindings
        this.toggleInput = this.toggleInput.bind(this);
        this.checkInputType = this.checkInputType.bind(this);
    }

    private toggleInput(): boolean {
        const { show } = this.state;
        this.setState(state => ({
            show: !state.show
        }));

        return !show;
    }

    private checkInputType(
        type: 'text' | 'number' | 'password',
        visible?: boolean
    ): 'text' | 'number' | 'password' {
        if (visible === true && type === 'password') {
            return 'text';
        }

        if (type === 'password' && visible === false) {
            return 'password';
        }

        if (type === 'number' || type === 'text') {
            return type;
        }

        return type;
    }

    render() {
        const {
            error,
            valid,
            required,
            label,
            type = 'text',
            name,
            onChange,
            onBlur,
            value,
            placeholder,
            className,
            hideLabel = true
        } = this.props;

        const { show } = this.state;

        const showPassword = this.checkInputType(type, show);

        return (
            <FormGroup>
                <InputGroup>
                    {!hideLabel && <Label>{label}</Label>}
                    <FormControl
                        className={className}
                        type={showPassword}
                        name={name}
                        isValid={valid}
                        isInvalid={valid === false}
                        required={required}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                    />
                    {type === 'password' && (
                        <InputGroup.Append>
                            <Button
                                autoFocus={false}
                                active={show ? true : false}
                                onClick={this.toggleInput}
                                variant='outline-secondary'
                            >
                                <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
                            </Button>
                        </InputGroup.Append>
                    )}
                    {error && <Feedback type='invalid'>{error}</Feedback>}
                </InputGroup>
            </FormGroup>
        );
    }
}

export default styled(Input)``;

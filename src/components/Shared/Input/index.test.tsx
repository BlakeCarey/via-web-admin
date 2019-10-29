import React from "react";
import { shallow } from 'enzyme';
import Input, { PropTypes } from './index';

const defaultProps = {
    name: '',
    variant: 'text',
    label:'',
    placeholder: '',
    value: '',
    valid: undefined,
    onChange: undefined,            
  }
  


describe('Input', () => {
    it('Renders without crashing given required props', () => {
        const TestInput = (props: PropTypes) => {
            shallow(<Input {...defaultProps} {...props} />)
        }

        expect(TestInput).toMatchSnapshot();
    });
});
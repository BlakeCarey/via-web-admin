import React from 'react';
import styled from 'styled-components';

type PropTypes = {
    children?: any;
};

// outter
const Outter = styled.div`
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

const Middle = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

const Inner = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;

export default (props: PropTypes) => (
    <Outter>
        <Middle>
            <Inner>{props.children}</Inner>
        </Middle>
    </Outter>
);

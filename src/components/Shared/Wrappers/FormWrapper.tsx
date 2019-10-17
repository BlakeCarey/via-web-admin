import React from 'react';
import styled from 'styled-components';
import BootstrapRow from 'react-bootstrap/Row';
import BootstrapCol from 'react-bootstrap/Col';

// types
type PropTypes = {
    children: any;
};

// local components
const Container = styled.div`
    margin: 20px 20px 0;

    @media screen and (max-width: 360px) {
        margin: 0px;
    }

    @media screen and (max-width: 768px) {
        margin: 0px;
    }
`;

const Background = styled.div`
    background-color: #ffffff;
    padding: 60px;
    border-radius: 10px;

    @media screen and (max-width: 360px) {
        padding: 5px;
        background-color: #e9e9e9;
    }

    @media screen and (max-width: 768px) {
        padding: 10px;
        background-color: #e9e9e9;
    }
`;

const Row = styled(BootstrapRow)`
    @media screen and (max-width: 360px) {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
        padding: 0;
    }
`;

const Col = styled(BootstrapCol).attrs({
    className: 'col-xs-12 col-md-8 col-lg-6'
})`
    @media screen and (max-width: 360px) {
        width: 100%;
        padding: 0;
        margin: 0;
    }
    
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
        margin: 0;
    }
`;

// export
export default (props: PropTypes) => {
    const { children } = props;
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={8} lg={6}>
                    <Background>{children}</Background>
                </Col>
            </Row>
        </Container>
    );
};

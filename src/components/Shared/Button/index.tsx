import styled from 'styled-components';

// components
import Button from 'components/Shared/Button/Button';

export default styled(Button)`
    display: inherit;
    width: 100%;
    transition: .2s ease-in;
    height: 50px;
    background-color: #00CBFF;
    border-color: #00CBFF;
    &:hover {
        background-color: #1A66CC;
        border-color: #1A66CC;
    }
`;
import styled from 'styled-components';
import theme from '../../theme';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem 2rem;
    padding: 2rem;
    box-shadow: ${theme.boxShadow.card};
    border-radius: ${theme.borderRadius.default};
    background: ${theme.color.white};
    width: 40%;
    z-index: 3;
    &:hover {
        box-shadow: ${theme.boxShadow.cardLarge}
    }
    @media(max-width: 500px){
        width: 90%;
        margin: 1rem auto;
        height: 244px;
    }
`

export default Card;
import styled from 'styled-components';

export const StyledCardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
    gap: 48px;
    flex-wrap: wrap;

    @media(min-width: 768px) {
          flex-wrap: nowrap;
    }
  
`;
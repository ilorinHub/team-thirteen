import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    .heading {
        color: #667085;
        font-weight: 400;
        font-size: 12px;
        /* line-height: 18px; */
        text-align: start;

        display: flex;
        gap: 3px;
        align-items: center;

        span.icon {
            width: 20px;
            height: 20px;
        }
    }

    .select_drop {
        color: #667085; 
    }
`;
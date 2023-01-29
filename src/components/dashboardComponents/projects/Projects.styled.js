import styled from 'styled-components';

export const StyledContainer = styled.main`
    position: relative;
    padding: 20px; // remove padding after implementing
`;

export const StyledHeader = styled.h2`
    margin: 20px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;

    color: #000000;
`;

export const StyledTopOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    -moz-box-align: center;

    .label_title {
        color: #667085;
        font-weight: 400;
        font-size: 12px;
        /* line-height: 18px; */

        padding-bottom: 5px;
    }
`;

export const StyledFilterOptions = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    -moz-box-align: center;
`;

export const StyledGroupAndView = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    -moz-box-align: center;

`;

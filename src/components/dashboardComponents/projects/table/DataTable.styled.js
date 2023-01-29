import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
    padding: 12px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.custom.shadow.sm};
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0px;

    thead {
        display: table-header-group;
    }
    tbody {
        display: table-row-group;
    }
    tr {
        display: table-row;
        vertical-align: middle;
    }
    tr.content {
        cursor: pointer;
         &:hover {
            background-color: #EBEBEB;
        }
    }
`;

export const StyledTableHeader = styled.th`
    font-weight: 600;
    font-size: 12px;
    color: #344054;

    padding: 12px 0;
    border-bottom: 1px solid #D0D5DD;

    line-height: 1.5rem;
    letter-spacing: 0.01071em;
    display: table-cell;
    vertical-align: inherit;

    text-align: left;

`;

export const StyledApps = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
`;

export const StyledTableCol = styled.td`
    font-size: 12px;
    color: #344054;

    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    display: table-cell;
    vertical-align: inherit;

    text-align: left;
    padding: 12px 0;
`;

export const StyledPara = styled.p`
    color: #344054;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;

    width: 70px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
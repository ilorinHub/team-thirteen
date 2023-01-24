import styled from 'styled-components';

export const StyledWrapper = styled.div`
    max-width: 320px;
    min-width: 220px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
    gap: 27px;

    background: linear-gradient(180deg, #101113 0%, rgba(16, 17, 19, 0) 100%);
    border-radius: 17px;
    box-shadow: ${({ theme }) => theme.custom.shadow.md};

    &:hover {
        box-shadow: ${({ theme }) => theme.custom.shadow.lg};
    }
`;

export const StyledIcon = styled.div`
    width: 40px;
    margin: 0 auto;
    height: 40px;
`;

export const StyledTitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
/* line-height: 155%; */
/* identical to box height, or 28px */

    text-align: center;
`;

export const StyledBody = styled.div`
    font-weight: 400;
    font-size: 16px;
/* line-height: 155%; */
/* or 25px */

    text-align: center;
    color: ${({ theme }) => theme.custom.colors.text200};
`;
import styled from 'styled-components';

export const StyledSetupProfileWrapper = styled.div`
    min-height: 100vh;
    padding: 24px;

    display: flex;
    align-items: center;

    .content {
        max-width: 590px;
        width: 100%;
        margin: 0 auto;
        padding: 24px;

        border-radius: 17px;
        box-shadow: ${({ theme }) => theme.custom.shadow.md};

        h2 {
            font-weight: 600;
            font-size: clamp(20px, 6vw, 30px);
            line-height: 38px;

            text-align: center;
            margin-bottom: 22px;
        }
    }
    
`;

export const StyledSetupProfileFormWrapper = styled.div` 
    label {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        display: inline-block;


        /* Gray / 900 */

        color: #101828;
        margin-bottom: 4px;

    }

    p.rem {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        /* Gray / 600 */

        color: #475467;
        margin: 32px 0 18px;

        a {
            color: ${({ theme }) => theme.custom.colors.primary}
        }
    }
`;
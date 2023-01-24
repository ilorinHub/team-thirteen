import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    isolation: isolate;

    .hero_content {
        width: fit-content;
        margin: 100px auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 16px;

        p {
            font-weight: 500;
            font-size: 16px;
            /* line-height: 30px; */
            text-align: center;

            @media(min-width: ${({ theme }) => theme.custom.breakpoints.sm}) {
                font-size: 20px;
            }
        }

        h1 {
            max-width: 662px;

            font-weight: 500;
            font-size: clamp(32px, 9vw, 60px);
            /* line-height: 72px; */
            /* or 120% */

            text-align: center;
            letter-spacing: -0.02em;
        }
    }
`;
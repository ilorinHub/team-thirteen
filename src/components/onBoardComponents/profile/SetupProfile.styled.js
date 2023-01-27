import styled from 'styled-components';

export const StyledSetupProfileWrapper = styled.div`
  padding: 24px;
  max-width: 590px;
  width: 100%;
  display: flex;
  align-items: center;

  .content {
    max-width: 590px;
    width: 100%;
    margin: 0 auto;

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
    margin: 12px 0 18px;

    a {
      color: ${({ theme }) => theme.custom.colors.primary};
    }
  }
`;
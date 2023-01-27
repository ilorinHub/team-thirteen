import styled from 'styled-components';

export const StyledWelcomeWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 590px;
  width: 100%;
  padding: 0 20px;

  .welcome_content {
    width: 100%;
    margin: 0 auto;

    border-radius: 17px;

    h2 {
      font-weight: 600;
      font-size: clamp(20px, 6vw, 30px);
      line-height: 38px;

      text-align: center;
      margin-bottom: 22px;
    }
  }
`;

export const StyledWelcomeFormWrapper = styled.div`
  p.intro {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    /* text-align: center; */

    /* Gray / 600 */
    color: #475467;

    margin-bottom: 18px;
  }

  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
    /* identical to box height, or 143% */

    /* Gray / 900 */

    color: #101828;
    margin-bottom: 4px;
  }

  p.rem {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* Gray / 600 */

    color: #475467;
    margin: 24px 0;
  }

  button {
    margin: 0 auto;
    display: block;
    width: 60%;
    border: none;
    line-height: 24px;
  }
`;

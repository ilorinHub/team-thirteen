import styled from 'styled-components';

export const StyledIntroduceWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;

  .content {
    h2 {
      font-weight: 600;
      font-size: clamp(20px, 6vw, 30px);
      line-height: 38px;

      text-align: center;
      margin-bottom: 22px;
    }
  }
`;

export const StyledIntroduceFormWrapper = styled.div`
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

    /* Gray / 900 */

    color: #101828;
    margin-bottom: 4px;
    margin-top: 28px;
  }
`;

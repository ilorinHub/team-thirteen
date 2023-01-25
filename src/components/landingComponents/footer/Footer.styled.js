import styled from "styled-components";

export const StyledBody = styled.div`
  font-weight: 600;
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  color: ${({ theme }) => theme.custom.colors.text200};
`;

export const CopyrightText = styled.p`
  font-weight: 400;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.custom.colors.text100};
`;

export const FooterLink = styled.label`
  margin-left: 10px;
`;
export const FooterLinkWrapper = styled.div`
  margin-left: 10px;
  width: 100%;
  padding: 10px;
  text-align: right;
`;

export const StyledWrapper = styled.div``;

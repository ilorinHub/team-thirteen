import styled from "styled-components";
import { Button } from "@mui/material";
export const StyledWrapper = styled.div`
  font-weight: 600;
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 14px;
  padding-bottom: 25px;
  color: ${({ theme }) => theme.custom.colors.text900};
`;
export const StyledButton = styled(Button)`
  border-radius: 24px;
  text-transform: none;
`;

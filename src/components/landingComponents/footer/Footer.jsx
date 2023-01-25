import { Box, Divider } from "@mui/material";
import {
  StyledWrapper,
  StyledBody,
  CopyrightText,
  FooterLink,
  FooterLinkWrapper,
} from "./Footer.styled";
import RSImage from "./assets/img/rslang.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <StyledWrapper>
      <Divider sx={{ background: "#25262B", marginBottom: "15px" }} />
      <StyledBody>
        <Image alt="" src={RSImage} width={32} height={24} />
        <FooterLinkWrapper>
          <FooterLink>MMTobi</FooterLink>
          <FooterLink>Haywhyze</FooterLink>
          <FooterLink>Wande</FooterLink>
          <FooterLink>Lawrdev</FooterLink>
        </FooterLinkWrapper>
      </StyledBody>
      <CopyrightText>&copy; 2023</CopyrightText>
    </StyledWrapper>
  );
};

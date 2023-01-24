import PropTypes from "prop-types";
import {
  StyledBody,
  StyledIcon,
  StyledTitle,
  StyledWrapper,
} from "./Card.styled";
import Image from "next/image";
export const Card = ({ icon, title, body }) => {
  return (
    <StyledWrapper>
      <StyledIcon>
        <Image alt="" src={icon} width={40} height={40} />
      </StyledIcon>
      <StyledTitle>{title}</StyledTitle>
      <StyledBody>{body}</StyledBody>
    </StyledWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

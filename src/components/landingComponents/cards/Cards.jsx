import React from "react";
import Card1Svg from "./assets/svg/integrate.svg";
import Card2Svg from "./assets/svg/colaborate.svg";
import Card3Svg from "./assets/svg/succeed.svg";
import { Card } from "./card/Card";
import { StyledCardsWrapper } from "./Cards.styled";

const data = [
  {
    title: "Integrate",
    icon: Card1Svg.src,
    body: `The ability to quickly set up and customize workflows for just about anything.`,
  },
  {
    title: "Colaborate",
    icon: Card2Svg.src,
    body: `You can manage projects, organize tasks, and build team spirit—all in one place..`,
  },
  {
    title: "Succeed",
    icon: Card3Svg.src,
    body: `Every single part of your task can be managed, tracked, and shared with teammates.`,
  },
];

export const Cards = () => {
  return (
    <StyledCardsWrapper>
      {data.map((item, i) => (
        <Card key={i} icon={item.icon} title={item.title} body={item.body} />
      ))}
    </StyledCardsWrapper>
  );
};

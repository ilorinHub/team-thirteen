import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ProjectSvg from './assets/svg/projects.svg';
import PackageSvg from './assets/svg/package.svg';
import SignupSvg from './assets/svg/signup.svg';

const FeatureGrid = ({ title, subtitle, tagText, reverse, image }) => (
  <StyledFeatureGrid reverse={reverse}>
    <TextContainer>
      <Tag>
        <svg
          style={{ marginRight: '8px' }}
          width='21'
          height='20'
          viewBox='0 0 21 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 10C1 15.2467 5.25329 19.5 10.5 19.5C15.7467 19.5 20 15.2467 20 10C20 4.75329 15.7467 0.5 10.5 0.5C5.25329 0.5 1 4.75329 1 10Z'
            stroke='#15AABF'
          />
          <path
            d='M15.5 7.25L8.625 14.125L5.5 11'
            stroke='#15AABF'
            strokeLinecap='round'
            stroke-linejoin='round'
          />
        </svg>
        {tagText}
      </Tag>
      <Title>{title}</Title>
      <Subtitle> {subtitle}</Subtitle>
    </TextContainer>
    <ImageContainer>
      <Image src={image.src} fill alt='svg' />
    </ImageContainer>
  </StyledFeatureGrid>
);

export default function FeatureGrids() {
  return (
    <div>
      <FeatureGrid
        tagText='Universal'
        title='Build the workflow you want'
        subtitle='Manage your boards using Drag-n-Drop, create adittional boards and tasks'
        image={ProjectSvg}
      />
      <FeatureGrid
        reverse
        tagText='Optimized'
        title='Everything you need in one place'
        subtitle='You can specify additional info in task description and assign users.'
        image={PackageSvg}
      />
      <FeatureGrid
        tagText='Unlimited'
        title='No limits for all users.'
        subtitle='Unlimited kanban boards, columns and tasks.'
        image={SignupSvg}
      />
    </div>
  );
}

const StyledFeatureGrid = styled.div`
  margin: 0 auto;
  padding: 50px 25px;
  max-width: 1100px;
  display: flex;
  gap: 75px;
  justify-content: center;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

  @media (max-width: ${({ theme }) => theme.custom.breakpoints.sm}) {
    flex-direction: column;
    gap: 45px;
    padding: 25px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
`;
const Tag = styled.div`
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 42px;
  line-height: 110%;
  letter-spacing: -0.04em;
  margin: 24px 0;
`;
const Subtitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 155%;
  color: #909296;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 60%;
  height: 420px;
  @media (max-width: ${({ theme }) => theme.custom.breakpoints.sm}) {
    width: 100%;
  }
`;

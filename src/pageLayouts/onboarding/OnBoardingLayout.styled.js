import styled from 'styled-components';

export const StyledWrapper = styled.div`
 padding: 0;
 background-color: white;
 min-height: 100vh;
`;

export const StyledSideBar = styled.aside`
  background-color: #000000;
  padding: 0 2rem;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 768px) {
    width: 25rem;
  }
`;

export const StyledMainSection = styled.main`
  padding: 0 2rem;
  margin-left: 25rem;
  padding: 5rem 2rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const StyledNavItem = styled.li`
  list-style: none;
  cursor: pointer;
  margin-bottom: 1.5rem;
  color: ${({ active }) => (active ? '#fff' : '#98A2B3')};
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.875rem;
  }
`
import styled from "styled-components";

export const BlogContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0 40px;
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 10px;
    margin: 24px auto;
  }
`;

export const BlogCard = styled.article`
  background: #212d45;
  border-radius: 12px;
  padding: 24px;
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;

export const BlogLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem auto;
`;

export const BlogButton = styled.a`
  border: medium none;
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
  padding: 10px 20px;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.8em;
  text-align: center;
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1/1/2/4;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0px;
    top: 0px;
    background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
    transition: 0.4s ease-out;
    z-index: -1;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
`;

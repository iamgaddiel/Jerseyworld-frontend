import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 550px;
  background-color: #f31414;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    height: auto;
  }
`;

export const BTextcontainer = styled.div`
  width: 50%;
  height: 550px;
  color: #ffff;
  padding: 5%;
  @media screen and (max-width: 425px) {
    width: 100%;
    height: auto;
    text-align: center;
  }
  @media screen and (max-width: 810px) {
    padding: 7%;
  }
`;

export const BHead = styled.h3`
  font-family: Roboto;
  font-weight: 600;
  font-size: 54px;
  margin-bottom: 0;
  @media screen and (max-width: 425px) {
    font-size: 34px;
  }
  @media screen and (max-width: 810px) {
    font-size: 34px;
  }
`;

export const BTypography = styled.p`
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
`;

export const BRectangle = styled.img`
  z-index: 1;
  margin-top: 0px;
  @media screen and (max-width: 425px) {
    width: 258.75px;
    height: 372px;
  }
`;

export const BImage = styled.img`
  position: relative;
  left: 15em;
  z-index: 2;
  @media screen and (max-width: 425px) {
    width: 294.91;
    height: 314.01px;
  }
  @media screen and (min-width: 810px) {
    left: 20em;
  }
`;

export const Bimgcontainer = styled(BTextcontainer)`
  display: flex;
  justify-content: right;
  padding: 0px;
  @media screen and (max-width: 425px) {
    width: 100%;
    text-align: none;
  }
`;

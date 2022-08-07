import styled from "styled-components";

export const Topbar = styled.div`
  min-height: 31px;
  background-color: #041e48;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    justify-content: space-evenly;
    padding: 15px;
    display: none;
  }
`;

export const TopbarTypography = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  @media screen and (max-width: 425px) {
    width: 70%;
  }
`;

export const TopbarBtn = styled.button`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  width: 94px;
  height: 260x;
  border-radius: 10px;
  padding: 5px;
  color: red;
  background-color: #fafafa;
  display: none;
  @media screen and (max-width: 425px) {
    display: block;
  }
`;

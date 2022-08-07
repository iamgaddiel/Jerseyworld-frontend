import styled from "styled-components";

export const SpecialOfferContainer = styled.div`
  width: 100%;
  border: 2px solid #e91f2c;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
  @media screen and (max-width: 425px) {
    padding: 6px;
    flex-wrap: wrap;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;



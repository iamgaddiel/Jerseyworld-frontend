import styled from "styled-components";

export const Shop_By_Categories_Container = styled.div`
  width: 100%;
`;

export const Heading_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10em;
`;

export const CategoryCard = styled.div`
  width: 397px;
  height: 246px;
  position: relative;
  border-radius: 8px;
`;

export const CategoriesCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    padding: 20px;
  }
`;

export const CategoryCardframe = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 59.8px;
  background-color: rgb(53, 54, 55, 0.75);
  border-radius: 0px 0px 8px 8px;
  position: absolute;
  bottom: 0;
`;

export const CategoryCardHeading = styled.h4`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

export const CategoryCardBtn = styled.button`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  width: 94px;
  height: 26px;
  border-radius: 8px;
  color: red;
  background-color: #fafafa;
  text-align: center;
  @media screen and (max-width: 425px) {
    display: block;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 246px;
  border-radius: 8px;
`;

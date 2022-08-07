import styled from "styled-components";

type imgProps = {
  showIcon?: boolean;
};

export const Header = styled.div`
  width: 100%;
  height: 91px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  @media screen and (max-width: 425px) {
    height: 70px;
    justify-content: space-around;
  }
`;

export const IconContainer = styled.span`
  width: 20%;
  height: 91px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShippingContainer = styled.span`
  display: flex;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const Typography = styled.span`
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  color: #5c5959;
  padding-right: 12px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  @media screen and (max-width: 425px) {
    display: ${({ showIcon }: imgProps) => showIcon && "none"};
    width: 40px;
    height: 40px;
  }
`;

export const Logo = styled(Img)`
  width: 150.19px;
  height: 91px;
  @media screen and (max-width: 425px) {
    width: 95px;
    height: 62px;
  }
`;

export const SearchIcon = styled.span`
  width: 40px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 100px;
  padding: 10px;
`;

export const MenuIcon = styled.img`
  display: none;
  @media screen and (max-width: 425px) {
    display: block;
  }
`;

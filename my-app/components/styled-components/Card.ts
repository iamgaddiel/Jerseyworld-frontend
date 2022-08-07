import styled from "styled-components";
import { Heading as Head } from "styled-typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

type cardProps = {
  color: string;
};

const Card = styled.div`
  width: 307.75px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  margin-top: 20px;
  color: ${(props: cardProps) => props.color};
  @media screen and (max-width: 425px) {
    width: 159px;
    border-radius: 6.39px;
  }
`;

export const Carditemcontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const CardIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

export const Cardimage = styled.img`
  width: 175px;
  height: 200px;
  @media screen and (max-width: 425px) {
    width: 145px;
    height: 171px;
  }
`;

export const CardBtn = styled.button`
  width: 84.94px;
  height: 44.94px;
  background-color: #fde9ea;
  border-radius: 5.7px;
  color: "#fde9ea";
  font-weight: 500;
  font-family: Roboto;
  border: 1px solid #fde9ea;
`;

export const Heading = styled.h3`
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto;
  color: #1f2937;
  margin: 0px;
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

export const Quantity_container = styled.div`
  margin-top: 12px;
  margin-left: 12px;
`;

export const Price_Cardbtn_Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
`;

type CustombtnProps = {
  focusVisibleClassName?: string | undefined;
  onFocusVisible?: any | undefined;
  formNoValidate?: boolean | undefined;
  "aria-label"?: string | undefined;
  visibility?: boolean | undefined;
};
export const CustomIconButton = styled(IconButton)`
  visibility: ${(props: CustombtnProps) =>
    !props.visibility ? "visible" : "hidden"};
`;

export default Card;

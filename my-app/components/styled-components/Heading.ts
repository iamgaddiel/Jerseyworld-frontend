import styled from "styled-components";
import { Heading as Head } from "styled-typography";

export const Heading: any = styled(Head)`
  font-family: Roboto;
  font-size: ${(props) => props.size};
  font-family: Roboto;
  color: ${(props) => props.color};
  @media screen and (max-width: 425px) {
    font-size: 34px;
  }
`;

export const CustomHeading1: any = styled.h1`
  font-family: Roboto;
  font-size: ${({ size }: HeadingProps) => size};
  color: ${({ color }: HeadingProps) => color};
  margin-bottom: 0px;
  @media screen and (max-width: 425px) {
    font-size: 26px;
  }
`;

type HeadingProps = {
  size: string;
  color: string;
};
export const CustomHeading: any = styled.h2`
  font-family: Roboto;
  font-size: ${({ size }: HeadingProps) => size};
  color: ${({ color }: HeadingProps) => color};
  margin-bottom: 0px;
  @media screen and (max-width: 425px) {
    font-size: 26px;
  }
`;

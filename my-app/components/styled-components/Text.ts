import styled from "styled-components";
import { Text as _Text } from "styled-typography";

export const Text: any = styled(_Text)`
  font-size: ${(props) => props.size};
  font-family: Roboto;
  color: ${(props) => props.color};
  font-weight: ${(props: any) => props.weight};
  @media screen and (max-width: 425px) {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

type PraraphyProps = {
  color?: string | undefined;
  size: string | undefined;
  noMargin?: boolean;
};

export const Paragraphy = styled.p`
  font-size: ${(props: any) => props.size};
  font-family: Roboto;
  color: ${({ color }: PraraphyProps) => color};
  font-size: ${({ size }: PraraphyProps) => size};
  margin-top: ${({ noMargin }: PraraphyProps) => noMargin && "0px"};
  font-weight: 400;
  @media screen and (max-width: 425px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

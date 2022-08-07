import Card, {
  CardIconContainer,
  Cardimage,
  CustomIconButton,
  CardBtn,
  Price_Cardbtn_Container,
  Heading,
  Quantity_container,
} from "./styled-components/Card";
import currencyFormatter from "currency-formatter";
import Iconbadge from "./styled-components/Iconbage";

type CardItemProps = {
  visibility?: boolean | undefined;
  SpecialOfer?: boolean;
};

export default function CardItem({ visibility, SpecialOfer }: CardItemProps) {
  return (
    <div>
      <Card color="#1F2937">
        <CardIconContainer>
          <Iconbadge>
            <span>Hote</span>
          </Iconbadge>
          <CustomIconButton visibility={visibility} aria-label="settings">
            <img src="/icons/hearticon.svg" />
          </CustomIconButton>
        </CardIconContainer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Cardimage src="/icons/Arsenal-Third-Long-Sleeve-Football-Shirt-20-21-350x435-removebg-preview 1.png" />
        </div>
        {!SpecialOfer ? (
          <div style={{ margin: "15px" }}>
            <Heading>
              Arsenal Addidas Authentic Jersey for 3rd match 2021
            </Heading>
            <Heading style={{ marginTop: "10px" }}>
              NGN {currencyFormatter.format(1000, { locale: "NGN" })}
            </Heading>
          </div>
        ) : (
          <div>
            <Quantity_container>
              <Heading>4 pices left</Heading>
              <img src="/icons/quantityline.svg" alt="quantityline" />
            </Quantity_container>
            <Price_Cardbtn_Container>
              <Heading>
                NGN {currencyFormatter.format(1000, { locale: "NGN" })}
              </Heading>
              <CardBtn style={{ color: "red" }}>Buy Now</CardBtn>
            </Price_Cardbtn_Container>
          </div>
        )}
      </Card>
    </div>
  );
}

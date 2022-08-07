import CategoriesCard from "../../components/CategoryCard";
import { CustomHeading } from "../../components/styled-components/Heading";
import {
  Shop_By_Categories_Container,
  Heading_Container,
  CategoriesCardContainer,
} from "../../components/styled-components/Shop-by-Category-container";
import { Paragraphy } from "../../components/styled-components/Text";

function Section3() {
  return (
    <Shop_By_Categories_Container>
      <Heading_Container>
        <CustomHeading size="26px" color="#041E48">
          Shop by Categories
        </CustomHeading>
        <Paragraphy size="16px" color="#4B5563">
          Easily locate the teams jersey you want to buy by category
        </Paragraphy>
      </Heading_Container>
      <CategoriesCardContainer>
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </CategoriesCardContainer>
    </Shop_By_Categories_Container>
  );
}

export default Section3;

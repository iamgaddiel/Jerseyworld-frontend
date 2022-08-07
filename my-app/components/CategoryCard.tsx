import {
  CategoryCard,
  Img,
  CategoryCardframe,
  CategoryCardHeading,
  CategoryCardBtn,
} from "./styled-components/Shop-by-Category-container";

function CategoriesCard() {
  return (
    <CategoryCard>
      <Img src="/icons/image2.svg" alt="cart2" />
      <CategoryCardframe>
        <CategoryCardHeading>Bassketball Jersey</CategoryCardHeading>
        <CategoryCardBtn>shop now</CategoryCardBtn>
      </CategoryCardframe>
    </CategoryCard>
  );
}

export default CategoriesCard;

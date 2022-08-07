import {
  NewsletterBtn,
  NewsletterContainer,
  NewsletterForm,
  NewsletterHeading,
  NewsletterImage,
  NewsletterImageContainer,
  NewsletterInputField,
  NewsletterText,
  NewsletterTextContainer,
  TextContainer,
} from "../../components/styled-components/Newsletter";

function Newsletter() {
  return (
    <NewsletterContainer>
      <TextContainer>
        <NewsletterHeading>
          Be Another Lucky Winner For The Month!
        </NewsletterHeading>
        <NewsletterTextContainer>
          <NewsletterText>
            Stand a chance to get 50% off your favourite club Jersey this Month.
            You only need to enter your email stand the chance to be the luck
            winner for this month.
          </NewsletterText>
        </NewsletterTextContainer>
        <NewsletterForm>
          <NewsletterInputField />
          <NewsletterBtn>Sign Up</NewsletterBtn>
        </NewsletterForm>
      </TextContainer>
      <NewsletterImageContainer>
        <NewsletterImage src="/icons/newlatterimage.svg" alt="newlatter" />
      </NewsletterImageContainer>
    </NewsletterContainer>
  );
}

export default Newsletter;

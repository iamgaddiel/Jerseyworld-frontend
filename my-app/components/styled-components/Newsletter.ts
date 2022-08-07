import styled from "styled-components";

export const NewsletterContainer = styled.div`
  width: 100%;
  display: flex;
  height: 292px;
  background-color: #041e48;
  margin-top: 10em;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  padding-top: 20px;
  padding-left: 10em;
  @media screen and (max-width: 425px) {
    width: 100%;
    padding: 0px;
  }
`;

export const NewsletterHeading = styled.h4`
  font-size: 28px;
  font-weight: 600;
  font-family: Roboto;
  color: #ffffff;
  margin-bottom: 0px;
  @media screen and (max-width: 425px) {
    font-size: 24px;
    font-weight: 500px;
    text-align: center;
  }
`;

export const NewsletterTextContainer = styled.div`
  width: 561px;

  @media screen and (max-width: 425px) {
    width: 100%;
    text-align: center;
    padding: 12px;
  }
`;

export const NewsletterText = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  color: #fafafa;
  @media screen and (max-width: 425px) {
    font-size: 16px;
    font-weight: 400px;
    text-align: center;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  @media screen and (max-width: 425px) {
    padding: 12px;
  }
`;

export const NewsletterInputField = styled.input`
  width: 561px;
  height: 54px;
  background-color: #ffffff;
  color: #5c5959;
  border: 1px solid rgba(92, 89, 89, 0.15);
  border-radius: 10px 0px 0px 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  padding-left: 12px;
  @media screen and (max-width: 425px) {
    width: 321px;
  }
`;

export const NewsletterBtn = styled.button`
  width: 142px;
  height: 54px;
  background-color: #e91f2c;
  border-radius: 0px 10px 10px 0px;
  border: 1px solid #e91f2c;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  @media screen and (max-width: 425px) {
    width: 83px;
  }
`;

export const NewsletterImageContainer = styled.div`
  width: 50%;
  height: 292px;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const NewsletterImage = styled.img`
  width: 100%;
  height: 292px;
  object-fit: contain;
`;

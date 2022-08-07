import CardItem from "../../components/Cardcontainer";
import { CustomHeading } from "../../components/styled-components/Heading";
import {
  SpecialOfferContainer,
  TimerContainer,
} from "../../components/styled-components/special-offer-container";
import { Paragraphy } from "../../components/styled-components/Text";
import { TimerBox } from "../../components/styled-components/TimerBox";

function Section2() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "10em",
      }}
    >
      <TimerContainer>
        <div>
          <CustomHeading size="26px" color="#041E48">
            Special offers{" "}
            <span style={{ color: "#E91F2C", textDecoration: "underline" }}>
              of the week
            </span>
          </CustomHeading>
          <Paragraphy noMargin={true} size="16px" color="#4B5563">
            Get this weeks offer at a cheaper rate
          </Paragraphy>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TimerBox>
            <span>02</span>
            <span>sec</span>
          </TimerBox>
          <span style={{ fontSize: "50px", color: "#6b7280" }}>:</span>
          <TimerBox>
            <span>02</span>
            <span>sec</span>
          </TimerBox>
          <span style={{ fontSize: "50px", color: "#6b7280" }}>:</span>
          <TimerBox>
            <span>02</span>
            <span>sec</span>
          </TimerBox>
        </div>
      </TimerContainer>
      <SpecialOfferContainer>
        <CardItem visibility={true} SpecialOfer={true} />
        <CardItem visibility={true} SpecialOfer={true} />
        <CardItem visibility={true} SpecialOfer={true} />
        <CardItem visibility={true} SpecialOfer={true} />
      </SpecialOfferContainer>
    </div>
  );
}

export default Section2;

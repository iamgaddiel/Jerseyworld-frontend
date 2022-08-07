import CardItem from "../../components/Cardcontainer";
import { Carditemcontainer } from "../../components/styled-components/Card";
import CustomButton from "../../components/Button";
import { Bodytextcontainer } from "../../components/styled-components/Body";
import { CustomHeading1 } from "../../components/styled-components/Heading";
import { Paragraphy } from "../../components/styled-components/Text";
function Section1() {
  return (
    <div>
      <Bodytextcontainer>
        <CustomHeading1 color="#4B5563" size="2.369rem">
          New Arrivals
        </CustomHeading1>
        <Paragraphy color="#4B5563" size="16px">
          Get this new season official jersey at a cheaper rate & receive a
          premium package
        </Paragraphy>
      </Bodytextcontainer>
      <Carditemcontainer>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Carditemcontainer>
      <div style={{ textAlign: "center" }}>
        <CustomButton />
      </div>
    </div>
  );
}

export default Section1;

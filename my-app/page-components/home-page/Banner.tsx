import {
  Banner as BannerHead,
  BTextcontainer,
  Bimgcontainer,
  BHead,
  BTypography,
  BRectangle,
  BImage,
} from "../../components/styled-components/Banner";
import Button from "@mui/material/Button";

function Banner() {
  return (
    <BannerHead>
      <BTextcontainer>
        <BHead> Altimate sports apparel and Fan Gear Store</BHead>
        <BTypography>
          Buy authentic quality jersey, rangging from football, Basketball,
          Volleyball, Hockey to other sports
        </BTypography>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "236px",
            height: "57px",
            fontWeight: "500",
          }}
        >
          Shop for jersey{" "}
          <img
            style={{ marginLeft: "15px" }}
            src="/icons/barrow.svg"
            alt="searchIcon"
          />
        </Button>
      </BTextcontainer>
      <Bimgcontainer>
        <div>
          <BImage src="/icons/bimage.svg" alt="searchIcon" />
        </div>
        <div>
          <BRectangle src="/icons/Rectangle.svg" alt="searchIcon" />
        </div>
      </Bimgcontainer>
    </BannerHead>
  );
}

export default Banner;

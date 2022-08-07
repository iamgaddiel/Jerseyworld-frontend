import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { ShippingContainer, Typography as Typo } from "./styled-components/Header";
import BasicSelect from "./PopoverItem";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <ShippingContainer aria-describedby={id} onClick={handleClick}>
        <Typo>Shipping to: </Typo>
        <img src="/icons/naijalogo.svg" style={{ marginRight: "12px" }} />
        <Typo> | English - NGN</Typo>
        <img src="/icons/checkicon.svg" style={{ marginRight: "12px" }} />
      </ShippingContainer>
      <Popover
        sx={{ marginTop: "12px" }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div style={{ width: "20em", padding: "12px" }}>
          <h4>Shipping to</h4>
          <BasicSelect
            item={
              <img src="/icons/naijalogo.svg" style={{ marginRight: "12px" }} />
            }
            text="Nigeria"
          />
          <h4>Language</h4>
          <BasicSelect text="English" />
          <h4>Currency</h4>
          <BasicSelect text="Nigeria (NGN Naira)" />
          <Button
            variant="outlined"
            sx={{
              fontWeight:"600",
              width: "99%",
              margin: "20px 0px 10px 0px",
            }}
          >
            update
          </Button>
        </div>
      </Popover>
    </div>
  );
}

import { Button } from "@mui/material";

function CustomButton() {
  return (
    <Button
      variant="outlined"
      sx={{
        backgroundColor: "white",
        color: "red",
        width: "220px",
        height: "51px",
        fontWeight: "500",
        borderColor: "#E91F2C",
        marginTop: "3em",
        boxShadow: "0px 12px 12px rgba(0, 0, 0, 0.08)",
        textAlign: "center",
      }}
    >
      Shop for jersey{" "}
      <img
        style={{ marginLeft: "15px" }}
        src="/icons/barrow.svg"
        alt="searchIcon"
      />
    </Button>
  );
}

export default CustomButton;

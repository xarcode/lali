import { styled } from "@mui/material/styles";
const Root = styled("div")(({ theme }) => ({
  backgroundColor: "#18191a",
  letterSpacing: "2px",
  fontFamily: "Poppins",

  backgroundImage:
    "radial-gradient( circle 1600px at 40.4% -51.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% );",
  color: "white",
  height: "100%",
  overflow: "auto",
  "& input,textarea": {
    border: "1px solid white",
  },
  "& .MuiInputBase-root": {
    padding: "0",
  },
  "& .Contact-heading": {
    fontSize: "3.6rem",
    textAlign: "center",
    width: "50%",
    margin: "0 auto",
    paddingTop: "1.5rem",
    fontWeight: "600",
  },
  "& .Contact-body": {
    display: "flex",
    width: "70%",
    margin: "0 auto",
    marginTop: "2.5rem",
    gap: "1.5rem",
    // backgroundColor: "grey",
    "& >div": {
      flexBasis: "50%",
    },
  },
  "& .Contact-details": {
    // backgroundColor: "aqua",
  },
  "& .Contact-subdetails": {
    margin: "0 0 2.5rem 0",
    display: "flex",
    gap: "1.2rem",
    fontSize: "1.3rem",
  },
  "& .Contact-subdetails>div:nth-of-type(2)": {
    // backgroundColor: "red",
    fontSize: "0.85rem",
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
    fontWeight: "300",
    letterSpacing: "1px",
    "& span:nth-of-type(1)": {
      fontWeight: "500",
      fontSize: "1.1rem",
      letterSpacing: "1.5px",
    },
  },
  "& svg": {
    fontSize: "1.8rem",
  },
  "& a": {
    color: "#ffffffbf",
    textDecoration: "none",
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
}));

export default Root;

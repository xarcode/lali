import { styled } from "@mui/material/styles";
const Root = styled("div")(({ theme }) => ({
  backgroundColor: "#18191a",
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
    fontSize: "3rem",
    textAlign: "center",
    width: "50%",
    margin: "0 auto",
    paddingTop: "2rem",
    fontWeight: "600",
  },
  "& .Contact-body": {
    display: "flex",
    width: "70%",
    margin: "0 auto",
    marginTop: "3rem",
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
    margin: "0 0 3rem 0",
    display: "flex",
    gap: "1.2rem",
    fontSize: "1.3rem",
  },
  "& .Contact-subdetails>div:nth-of-type(2)": {
    // backgroundColor: "red",
    fontSize: "1rem",
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
    fontWeight: "200",
    "& span:nth-of-type(1)": {
      fontWeight: "500",
    },
  },
  "& svg": {
    fontSize: "1.7rem",
  },
}));

export default Root;

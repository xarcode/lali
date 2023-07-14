import { styled } from "@mui/material/styles";
const Root = styled("div")(({ theme }) => ({
  backgroundColor: "#f7e5df",
  height: "100%",
  overflow: "auto",
  "& input,textarea": {
    // border: "1px solid white",
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
    width: "60%",
    margin: "0 auto",
    letterSpacing: "1px",
    marginTop: "2.3rem",
    gap: "1.5rem",
    // backgroundColor: "grey",
    "& >div": {
      flexBasis: "50%",
    },
  },
  "& .Contact-img": {
    // backgroundColor: "aqua",
    display: "flex",
    justifyontent: "center",
    "& >img": {
      width: "90%",
      margin: "0 auto",
    },
  },
  "& .Contact-subdetails": {
    margin: "0 2rem 2rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    fontSize: "1.2rem",
  },
  "& .Contact-subdetails>div:nth-of-type(1)": {
    // // backgroundColor: "red",
    // fontSize: "1rem",
    // display: "flex",
    fontWeight: "600",
    // gap: "0.5rem",
    color: "#C70039",
    // flexDirection: "column",
    // fontWeight: "200",
    // "& span:nth-of-type(1)": {
    //   fontWeight: "500",
    // },
  },
  "& .Contact-subdetails>div:nth-of-type(2)": {
    fontSize: ".85rem",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
    gap: "0.4rem",
    "& svg": {
      fontSize: "1.2rem",
      "&:hover": {
        color: "#C70039",
        cursor: "pointer",
      },
    },
  },
  "&  div.Contact-body > div.Contact-details > div:nth-child(2) > div.Contact-icons":
    {
      display: "flex",
      flexDirection: "row",
    },
}));

export default Root;

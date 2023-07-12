import { styled } from "@mui/material/styles";
const Root = styled("div")(({ theme }) => ({
  marginBottom: "50px",
  "& .AppBar": {
    backgroundColor: "darkslategray",
    height: "50px",
  },
  "& .MuiToolbar-root": {
    minHeight: "0",
    height: "100%",
  },
  "& .MuiContainer-root": {
    minHeight: 0,
  },
}));

export default Root;

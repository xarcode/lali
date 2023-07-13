import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
const Root = styled("div")(({ theme }) => ({
  // backgroundColor: "#1819cc",
  "& input,textarea": {
    "&:hover": {},
  },
  "& fieldset": {
    "&:hover": {
      // border: "1px solid white",
      borderRadius: 0,
    },
  },
}));

export default Root;

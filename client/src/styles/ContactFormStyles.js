import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
const Root = styled("div")(({ theme }) => ({
  // backgroundColor: "#1819cc",
  "& .MuiInputBase-root+p,": {
    marginBottom: "1.5rem",
    display: "block",
  },
  "& input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
    {
      boxShadow: "0 0 0 30px #f7e5df inset !important",
    },

  "& input:placeholder": {
    color: "black",
  },
  "& fieldset": {
    borderColor: "black",
    border: "none",
    borderRadius: "0",
    borderBottom: "2px solid black",
  },
  "& input:focus+.MuiError": {
    backgroundColor: "black",
  },
  "& .ContactForm-btn": {
    backgroundColor: "#C70039",
    borderRadius: "20px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#99022d",
    },
  },
}));

export default Root;

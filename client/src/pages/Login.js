import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import Root from "../styles/RegistrationStyles";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const Login = () => {
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      type: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      try {
        console.log("k");
        const response = await axios.post(
          "http://localhost:5000/auth/login",
          values
        );
        const token = response.data.token;
        if (token != null) {
          localStorage.setItem("token", token);
          handleSuccess("Logged in successfully");
          console.log(response.data);
        }
      } catch (error) {
        handleError("Error in login");
        console.log(error);
      }

      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Root>
      <Navbar />
      <div className="Registration-form">
        <form onSubmit={formik.handleSubmit}>
          <RadioGroup
            onChange={formik.handleChange}
            name="type"
            defaultValue={"Fellow"}
            value={formik.values.inCompliance}
          >
            <FormControlLabel
              value="programManager"
              control={<Radio />}
              label="Program Manager"
            />
            <FormControlLabel
              value="mentor"
              control={<Radio />}
              label="Mentor"
            />
            <FormControlLabel
              value="fellow"
              control={<Radio />}
              label="Fellow"
            />
          </RadioGroup>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
      <ToastContainer />
    </Root>
  );
};
export default Login;

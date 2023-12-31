import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Root from "../styles/ContactFormStyles";

const validationSchema = yup.object({
  name: yup
    .string("Enter your full name")
    .required("Name is required")
    .min(2, "Name should be of minimum 2 characters length"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup
    .string("Enter your password")
    .min(8, "Message should be of minimum 8 characters length")
    .required("Message is reuired"),
});
export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Root>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          id="name"
          name="name"
          label="Full Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          multiline
          rows={3}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          fullWidth
          id="message"
          name="message"
          label="Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Root>
  );
}

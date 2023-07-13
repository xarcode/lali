import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Navbar from "../components/Navbar";
import Root from "../styles/ContactStyles";
import ContactForm from "../components/ContactForm";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const validationSchema = yup.object({
  name: yup
    .string("Enter your full name")
    .required("Name is required")
    .min(2, "Name should be of minimum 2 characters length"),
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
export default function Contact() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
      <Navbar />
      <div className="Contact-main">
        <div className="Contact-heading">Let's Connect</div>
        <div className="Contact-body">
          <div className="Contact-details">
            <div className="Contact-subdetails">
              <div>
                <PhoneRoundedIcon />
              </div>
              <div>
                <span>PHONE</span>
                <span>
                  <Link to="#">+91 88888 88888</Link>
                </span>
              </div>
            </div>
            <div className="Contact-subdetails">
              <div>
                <EmailRoundedIcon />
              </div>
              <div>
                <span>MAIL</span>
                <span>
                  <Link to="#">lali@gmail.com</Link>
                </span>
              </div>
            </div>
            <div className="Contact-subdetails">
              <div>
                <InstagramIcon />
              </div>
              <div>
                <span>INSTAGRAM</span>
                <span>
                  <Link to="#">lali</Link>
                </span>
              </div>
            </div>
            <div className="Contact-subdetails">
              <div>
                <TwitterIcon />
              </div>
              <div>
                <span>TWITTER</span>
                <span>
                  <Link to="#">lali</Link>
                </span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Root>
  );
}

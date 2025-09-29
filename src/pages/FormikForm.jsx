import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Initial values
const initialValues = {
  name: "",
  email: "",
  phone: "",
};

// ✅ Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("abhy name to likh do"),
  phone: Yup.number().required("Phone number do gi kya?"),
  email: Yup.string()
    .email("Proper format me likh bhai")
    .required("Email is required"),
});

// ✅ Submit function
const handleSubmit = (values, { resetForm }) => {
  console.log("Form Data:", values);
  resetForm(); // reset after submit
};

export default function FormikForm() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Formik + Yup Example</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Name Field */}
          <div>
            <label>Enter Name:</label>
            <Field name="name" />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          {/* Email Field */}
          <div>
            <label>Enter Email:</label>
            <Field name="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          {/* Phone Field */}
          <div>
            <label>Enter Phone:</label>
            <Field name="phone" />
            <ErrorMessage
              name="phone"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          {/* Submit */}
          <button>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

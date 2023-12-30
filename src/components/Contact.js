import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Component.css'

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be 3 characters long")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required")
  });

  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    fetch("http://localhost:4500/", { // Change the URL to your backend's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message); // Display the response from the backend
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        resetForm();
        setSubmitting(false);
      });
  };
  

  return (
    <div className="section flex flex-col justify-center mx-5" id="contact">
      <h1 className="text-5xl font-bold sm:text-2xl">Fill this form!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <form
            className="flex flex-col w-[50%] bg-black/25 card justify-center p-10 rounded-lg"
            onSubmit={props.handleSubmit}
          >
            <div>
              <label className="my-2 block">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Your name here"
                className="w-full rounded-lg text-black"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-700"
              />
            </div>
            <div>
              <label className="my-2 block">Email address</label>
              <Field
                type="email"
                name="email"
                placeholder="name@example.com"
                className="mb-2 w-full rounded-lg text-black"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-700"
              />
            </div>
            <div>
              <label className="block">Message</label>
              <textarea
                rows="3"
                name="message"
                placeholder="Your Message here"
                className="my-2 p-2 w-full rounded-lg text-black"
              ></textarea>
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-700"
              />
            </div>
            <button
              type="submit"
              className="my-2 bg-blue-600 rounded-lg"
              disabled={
                props.values.name === "" ||
                props.values.email === ""
              }
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;

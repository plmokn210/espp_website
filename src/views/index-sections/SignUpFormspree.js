import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkyqkpy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div
      className="section section-signup"
      style={{
        backgroundImage:
          "url(" +
          require("assets/img/jason-leung-SAYzxuS1O3M-unsplash.jpeg").default +
          ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "710px",
      }}
    >
      <div className="container text-white">
        <div className="row">
          <div className="col-sm"></div>
          {/* <form onSubmit={handleSubmit} className="bg-info px-5">
              <CardTitle className="title-up text-center mt-4 text-white" tag="h3">
                Sign Up
              </CardTitle>
            <CardBody>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
              />
              <br />
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                className="form-control"
              />
              <br />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="btn
            btn-primary
            mb-2"
              >
                Submit
              </button>
            </CardBody>
          </form> */}
          <div className="col-sm"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

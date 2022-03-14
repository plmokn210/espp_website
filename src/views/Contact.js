import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
// reactstrap components
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

// core components

function Contact() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [companyFocus, setCompanyFocus] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [state, handleSubmit] = useForm("mwkyqkpy");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/jason-leung-SAYzxuS1O3M-unsplash.jpeg")
              .default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "710px",
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <form
                // action="https://formspree.io/f/mwkyqkpy"
                // className="form"
                // method="POST"
                onSubmit={handleSubmit}
              >
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Sign Up
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      name="first_name"
                      required
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last Name..."
                      type="text"
                      name="last_name"
                      required
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>

                  <InputGroup
                    className={
                      "no-border" + (companyFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons shopping_shop"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Company"
                      type="text"
                      required
                      name="company"
                      onFocus={() => setCompanyFocus(true)}
                      onBlur={() => setCompanyFocus(false)}
                    ></Input>
                  </InputGroup>

                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="text"
                      name="email"
                      required
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    size="lg"
                    type="submit"
                    disabled={state.submitting}
                  >
                    Get Started
                  </button>
                </CardFooter>
              </form>
            </Card>
          </Row>
          <div className="col text-center"></div>
        </Container>
      </div>
    </>
  );
}

export default Contact;

import React, {useEffect, useState} from "react";
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

function Calculator() {
  const [Salary, setSalary] = React.useState(false);
  const [Discount, setDiscount] = React.useState(false);
  const [maxSalary, setmaxSalary] = React.useState(false);
  const [lookback, setlookback] = React.useState(false);
  const [salaryAmount, setSalaryAmount] = React.useState(0);
  const [discountAmount, setDiscountAmount] = React.useState(0);
  const [maxSalaryAmount, setMaxSalaryAmount] = React.useState(0);
  const [calculatedAmount, setCalculatedAmount] = React.useState(0);
  const [loading, setLoading] = React.useState(false)

  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/spacegray_background.webp").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "710px",
        }}
      >
        <Container className="">
          <Row>
            <Card className="card-signup" data-background-color="black">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Calculate earnings
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      "no-border" + (Salary ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons business_money-coins"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Annual Salary (USD)"
                      type="text"
                      onFocus={() => setSalary(true)}
                      onBlur={() => setSalary(false)}
                      onChange={(e) => setSalaryAmount(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (Discount ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons shopping_tag-content"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Discount (%)"
                      type="text"
                      onFocus={() => setDiscount(true)}
                      onBlur={() => setDiscount(false)}
                      onChange={(e) => setDiscountAmount(e.target.value)}
                    ></Input>
                  </InputGroup>

                  <InputGroup
                    className={
                      "no-border" + (lookback ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons objects_diamond"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Max (%)"
                      type="text"
                      onFocus={() => setmaxSalary(true)}
                      onBlur={() => setmaxSalary(false)}
                      onChange={(e) => setMaxSalaryAmount(e.target.value)}
                    ></Input>
                  </InputGroup>

                  {/* <InputGroup
                    className={
                      "no-border" + (maxSalary ? " input-group-focus" : "")
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
                      onFocus={() => setlookback(true)}
                      onBlur={() => setlookback(false)}
                    ></Input>
                  </InputGroup> */}
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setCalculatedAmount(
                        salaryAmount * discountAmount * maxSalaryAmount
                      );
                      setTimeout((setLoading(true), 2000));
                    }}
                    size="lg"
                  >
                    {/* {loading ? (
                      "Calculate"
                    ) : (
                      <i className="now-ui-icons loader_gear"></i>
                    )} */}
                    Calculate
                  </Button>
                  <br />
                  <br />
                  {calculatedAmount === 0
                    ? ""
                    : `Your expected addional earnings is: $${calculatedAmount}`}
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className="col text-center"></div>
        </Container>
      </div>
    </>
  );
}

export default Calculator;

import React, { useState } from "react";
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import Switch from "react-bootstrap-switch";

// core components

function Images() {
  const [salary, setSalary] = useState();
  const [discount, setDiscount] = useState();
  const [maxSalary, setMaxSalary] = useState();

  return (
    <>
      <div className="m-5 border rounded py-2">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                {/* <img
                  alt="..." className=""
                  src={require("assets/img/money-g2ee0dff7e_640.png").default}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/wallet-g2990ed87e_640.png").default}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..." className="m-4"
                  src={require("assets/img/chart-g59fea6118_640.png").default}
                ></img> */}
                <form>
                  <FormGroup>
                    <Input
                      className="form-control-success font-weight-bold"
                      defaultValue=""
                      placeholder="Annual Salary (USD)"
                      type="number"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="form-control-success font-weight-bold"
                      defaultValue=""
                      placeholder="Stock Purchase Discount (%)"
                      type="number"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="form-control-success font-weight-bold"
                      defaultValue=""
                      placeholder="Maximum Salary For Stock Purchase (%)"
                      type="number"
                    ></Input>
                  </FormGroup>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Lookback Period
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      No Lookback Period
                    </label>
                  </div>
                  <Button color="info" className="font-weight-bold">
                    Calculate
                  </Button>
                  <div>Your estimated additional income is: `${2}`
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;

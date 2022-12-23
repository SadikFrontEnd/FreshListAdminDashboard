import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class AddTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      selectedFile: null,
      selectedName: "",
      desc: "",
      image: "",
      status: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category_name", this.state.category_name);
    data.append("desc", this.state.desc);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append("image", this.state.selectedFile, this.state.selectedName);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    axiosConfig
      .post("/admin/addcategory", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/freshlist/category/categoryList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Transactions
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/freshlist/wallet/credit")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      placeholder=" Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Mobile No. </Label>
                    <Input
                      type="number"
                      placeholder="Mobile No."
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Order Id</Label>
                    <Input
                      type="number"
                      placeholder="Order Id"
                      name="order_id"
                      value={this.state.order_id}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Wallet Type</Label>
                  <Input
                    required
                    type="select"
                    name="bannertype"
                    placeholder="Enter Iden Type"
                    value={this.state.bannertype}
                    onChange={this.changeHandler}
                  >
                    <option value="select">--Select--</option>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                  </Input>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Amount</Label>
                    <Input
                      type="number"
                      placeholder="Enter Here"
                      name="amount"
                      value={this.state.amount}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddTransactions;

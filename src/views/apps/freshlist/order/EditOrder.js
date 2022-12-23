import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Table,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class EditOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      attribute: "",
      quantity: "",
      name: "",
      delivery_slot: "",
      orderd_from: "",
      order_zone: "",
      billing_add: "",
      phone_no: "",
      delivery_add: "",
      order_date: "",
      time_slot: "",
      items: "",
      assing_drive: "",
      notifyby_email: "",
      order_id: "",
      status: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //   onChangeHandler = (event) => {
  //     this.setState({ selectedFile: event.target.files[0] });
  //     this.setState({ selectedName: event.target.files[0].name });
  //     console.log(event.target.files[0]);
  //   };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //   changeHandler = (e) => {
  //     this.setState({ status: e.target.value });
  //   };

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
        this.props.history.push("/app/freshlist/order/orderList");
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
                Edit Order
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/freshlist/order/all")}
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
                    <Label>Order ID</Label>
                    <Input
                      type="text"
                      placeholder="Order id"
                      name="category_name"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Mobile No.</Label>
                    <Input
                      type="Number"
                      placeholder="Enter No."
                      name="category_name"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Billing Address</Label>
                    <Input
                      type="text"
                      placeholder="Enter No."
                      name="category_name"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Delivery Slots</Label>
                    <Input
                      type="Number"
                      placeholder="Enter No."
                      name="category_name"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Item</Label>
                    <Input
                      type="text"
                      placeholder="Enter Here"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Order Date</Label>
                    <Input
                      type="text"
                      placeholder="Enter Date Here"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Latitude</Label>
                    <Input
                      type="urL"
                      placeholder=""
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Longitude</Label>
                    <Input
                      type="urL"
                      placeholder=""
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Delivery Address</Label>
                    <Input
                      type="select"
                      placeholder="Enter Address"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Order From</Label>
                    <CustomInput
                      type="select"
                      placeholder=""
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    >
                      <option>--Select--</option>
                      <option value="Web">Web</option>
                      <option value="App">App</option>
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Delivery Date</Label>
                    <Input
                      type="text"
                      placeholder=""
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Assign Driver </Label>
                    <Input
                      type="text"
                      placeholder="Enter Name"
                      name="image"
                      value={this.state.image}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Delivery Boy</Label>
                    <Input
                      type="text"
                      placeholder="Enter Name"
                      name="image"
                      value={this.state.image}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Assign Hub</Label>
                    <Input
                      type="text"
                      placeholder=""
                      name="image"
                      value={this.state.image}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Customer Notification </Label>
                    <Input
                      type="text"
                      placeholder=""
                      name="image"
                      value={this.state.image}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Order Status</Label>
                    <CustomInput
                      type="select"
                      placeholder=""
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    >
                      <option>--Select--</option>
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Packaging">Packaging</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Outfordelivery">Outfordelivery</option>
                      <option value="Canceled">Canceled</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Failedtodeliver">Failedtodeliver</option>
                      <option value="Returned">Returned</option>
                    </CustomInput>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="my-2">
                <Table>
                  <thead>
                    <tr>
                      <th>SNo.</th>
                      <th>Quantity</th>
                      <th>Attribute</th>
                      <th>Name</th>
                      <th>U.Price</th>
                      <th>GST</th>
                      <th>Total</th>
                      <th>Sub Total</th>
                      <th>Donation</th>
                      <th>Tips</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>2</td>
                      <td>1Kg</td>
                      <td>Onion</td>
                      <td>40</td>
                      <td>10%</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>2</td>
                      <td>1Kg</td>
                      <td>Onion</td>
                      <td>40</td>
                      <td>10%</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>2</td>
                      <td>1Kg</td>
                      <td>Onion</td>
                      <td>40</td>
                      <td>10%</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>2</td>
                      <td>1Kg</td>
                      <td>Onion</td>
                      <td>40</td>
                      <td>10%</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                      <td>Rs.80</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>

              <Row>
                <Button.Ripple
                  color="danger"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Update
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditOrder;

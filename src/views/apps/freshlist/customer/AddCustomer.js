import React, { useState } from "react";
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
// import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    hub_name: "",
    desc: "",
    email: "",
    phone: "",
    address: "",
    d_zone: "",
    cat: "",
    subcat: "",
    status: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitHandler", formData);

    axiosConfig
      .post("/admin/addcategory", formData)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/freshlist/order/orderList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Create Hub
            </h1>
          </Col>
        </Row>
        <CardBody>
          <Form className="m-1" onSubmit={submitHandler}>
            <Row className="mb-2">
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Hub Name</Label>
                  <Input
                    type="text"
                    placeholder="Hub Name"
                    name="hub_name"
                    value={formData.hub_name}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Phone No.</Label>
                  <Input
                    type="Number"
                    placeholder="Enter No."
                    name="phone"
                    value={formData.phone}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>

              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Address</Label>
                  <Input
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={changeHandler}
                  ></Input>
                </FormGroup>
              </Col>

              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Category</Label>
                  <CustomInput
                    type="select"
                    placeholder=""
                    name="cat"
                    id="cat"
                    value={formData.cat}
                    onChange={changeHandler}
                  >
                    <option>--Select--</option>
                    <option value="category1">Category1</option>
                    <option value="category2">Category2</option>
                  </CustomInput>
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Sub Category</Label>
                  <CustomInput
                    type="select"
                    placeholder=""
                    name="subcat"
                    // id="subcat"
                    value={formData.subcat}
                    onChange={changeHandler}
                  >
                    <option>--Select--</option>
                    <option value="sub category1">Sub Category1</option>
                    <option value="sub category2">Sub Category2</option>
                  </CustomInput>
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Description</Label>
                  <Input
                    type="text"
                    placeholder="Enter Description"
                    name="desc"
                    value={formData.desc}
                    onChange={changeHandler}
                  ></Input>
                </FormGroup>
              </Col>

              <Col lg="6" md="6">
                <FormGroup>
                  <Label>Delivery Zone</Label>
                  <Input
                    type="text"
                    placeholder=""
                    name="d_zone"
                    value={formData.d_zone}
                    onChange={changeHandler}
                  />
                </FormGroup>
              </Col>

              <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                <Label className="mb-1">Status</Label>
                <div className="form-label-group" onChange={changeHandler}>
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col>
            </Row>

            <Row className="m-2">
              <Button color="primary" type="submit" className="mr-1 mb-1">
                Create Hub
              </Button>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddCustomer;

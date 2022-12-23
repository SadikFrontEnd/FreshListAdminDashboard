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

export class AddCategory extends Component {
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
                Add Category
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/freshlist/category/categoryList")
                }
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
                    <Label>Category Name</Label>
                    <Input
                      type="text"
                      placeholder="Customer Name"
                      name="category_name"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Description</Label>
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
                    <Label>Category Image </Label>
                    <CustomInput
                      type="file"
                      name="image"
                      value={this.state.image}
                      onChange={this.onChangeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Type</Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Type"
                    name="type"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  >
                    <option>---Select---</option>
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                    <option value="egg">Egg only</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Web Thumbnail </Label>
                    <CustomInput
                      type="file"
                      name="image"
                      value={this.state.image}
                      onChange={this.onChangeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>App Thumbnail </Label>
                    <CustomInput
                      type="file"
                      name="image"
                      value={this.state.image}
                      onChange={this.onChangeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Web Banner </Label>
                    <CustomInput
                      type="file"
                      name="image"
                      value={this.state.image}
                      onChange={this.onChangeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>App Banner</Label>
                    <CustomInput
                      type="file"
                      name="image"
                      value={this.state.image}
                      onChange={this.onChangeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label>Show on </Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Type"
                    name="type"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  >
                    <option>---Select---</option>
                    <option value="featured">Featured</option>
                    <option value="list">List</option>
                    <option value="app">App</option>
                    <option value="web">Web</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Status</Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Type"
                    name="type"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  >
                    <option>---Select---</option>
                    <option value="enable">Enable</option>
                    <option value="disable">Disable</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Relation </Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Type"
                    name="type"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  >
                    <option>---Select---</option>
                    <option value="parent">Parent</option>
                    <option value="child">Child</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Url</Label>
                    <Input
                      type="text"
                      placeholder="Enter Url Here"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <FormGroup tag="fieldset">
                    <Label>Featured:</Label>
                    <div className="d-flex">
                      <FormGroup check>
                        <Input name="radio1" type="radio" />
                        <Label check className="mr-2">
                          Yes
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input name="radio1" type="radio" />
                        <Label check>No</Label>
                      </FormGroup>
                    </div>
                  </FormGroup>
                </Col>
              </Row>

              <Row className="my-1">
                <Col lg="12" md="12">
                  <h1 col-sm-6 className="float-left">
                    SEO
                  </h1>
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6" className="mb-1">
                  <Label>MetaData</Label>
                  <Input
                    type="text"
                    placeholder="MetaData"
                    name="type"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>MetaData Description </Label>
                  <Input
                    type="text"
                    placeholder="Description"
                    name="type"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Product Search Tags</Label>
                  <Input
                    type="text"
                    placeholder="Product Search Tags"
                    name="type"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>SeprateSet</Label>
                  <Input
                    type="text"
                    placeholder="SeprateSet"
                    name="type"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="danger"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Category
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddCategory;

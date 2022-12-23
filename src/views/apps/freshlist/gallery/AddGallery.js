import React, { Component } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class AddGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      desc: "",
      product_img: "",
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
    data.append("name", this.state.name);
    data.append("sortorder", this.state.sortorder);
    data.append("desc", this.state.desc);
    data.append("status", this.state.status);
    data.append(
      "product_img",
      this.state.selectedFile,
      this.state.selectedName
    );
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post(" /addproductcategory", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/freshlist/gallery/gallery");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h1>Add New Product</h1>
        <div>
          <Card>
            <Row className="m-1">
              <Col className="">
                <h2>Upload File</h2>
              </Col>
              <Col>
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.push("/app/freshlist/gallery/gallery")}
                >
                  Back
                </Button>
              </Col>
            </Row>
            <CardBody>
              <Form onSubmit={this.submitHandler}>
                <Row className="mb-1">
                  <Col lg="12">
                    <Label>Image</Label>
                    <CustomInput
                      required
                      type="file"
                      name="bannertype"
                      placeholder="Upload image"
                      value={this.state.bannertype}
                      onChange={this.changeHandler}
                    ></CustomInput>
                  </Col>
                </Row>
                <Row style={{ float: "right" }}>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1 "
                  >
                    Upload
                  </Button.Ripple>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default AddGallery;

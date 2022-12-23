import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
export default class AddBatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batch_title: "",
      selectedFile: undefined,
      selectedName: "",
    };
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
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
    data.append("batch_title", this.state.batch_title);
    data.append("batchtype", this.state.batchtype);

    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    axiosConfig
      .post("/addbatch", data)
      .then((response) => {
        console.log(response);
        swal("Successful!", "You clicked the button!", "success");
        this.props.history.push("/app/freshlist/batch/batchList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>New Batch</CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Batch</Label>
                  <Input
                    required
                    type="text"
                    name="batch_name"
                    placeholder="Enter Batch Name"
                    value={this.state.batch_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Rack Number</Label>
                  <Input
                    required
                    type="number"
                    name="rack_number"
                    placeholder="Enter Rack Number"
                    value={this.state.rack_number}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Shelf Life</Label>
                  <Input
                    required
                    type="text"
                    name="shelf_life"
                    placeholder="Shelf Life"
                    value={this.state.shelf_life}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expiry Date</Label>
                  <Input
                    required
                    type="date"
                    name="expiry_date"
                    placeholder="Expiry Date"
                    value={this.state.expiry_date}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Stock</Label>
                  <Input
                    required
                    type="text"
                    name="stock"
                    placeholder="Stock"
                    value={this.state.stock}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Notify</Label>
                  <Input
                    required
                    type="text"
                    name="notify"
                    placeholder="Notify"
                    value={this.state.notify}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Batch
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

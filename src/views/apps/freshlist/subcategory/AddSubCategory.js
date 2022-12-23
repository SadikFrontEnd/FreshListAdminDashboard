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
    FormGroup, CustomInput
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class AddSubCategory extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            selectedFile: null,
            selectedName: "",
            sortorder: "",
            desc: "",
            brand_img: "",
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
        if (this.state.selectedFile !== null) {
            data.append(
                "brand_img",
                this.state.selectedFile,
                this.state.selectedName
            );
        }
        //   for (var value of data.values()) {
        //     console.log(value);
        //  }
        axiosConfig
            .post("/addbrand", data)
            .then((response) => {
                console.log(response);
                this.props.history.push("/app/freshlist/subcategory/subcategoryList");
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
                                Add SubCategory
                            </h1>
                        </Col>
                        <Col>
                            <Button
                                className=" btn btn-danger float-right"
                                onClick={() => history.push("/app/freshlist/subcategory/subcategoryListt")}
                            >
                                Back
                            </Button>
                        </Col>
                    </Row>
                    <CardBody>
                        <Form className="m-1" onSubmit={this.submitHandler}>
                            <Row className="mb-2">
                                <Col lg="6" md="6" className="mb-2">

                                    <Label>SubCategory Name</Label>
                                    <Input
                                        type="text"
                                        placeholder="Customer Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Priority</Label>
                                    <Input
                                        type="number"
                                        placeholder="Sort Order"
                                        name="sortorder"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>

                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Category</Label>
                                    <CustomInput
                                        type="select"
                                        name="type"
                                        value={this.state.type}
                                        onChange={this.changeHandler}
                                    >
                                        <option>---Select Product---</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </CustomInput>
                                </Col>
                            </Row>
                            <Row>
                                <Button.Ripple
                                    color="danger"
                                    type="submit"
                                    className="mr-1 mb-1"
                                >
                                    Add SubCategory
                                </Button.Ripple>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default AddSubCategory;
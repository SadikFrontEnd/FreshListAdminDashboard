import React, { Component } from "react";
import { BsFillPersonFill } from "react-icons/bs"
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

export class GeneralInformation extends Component {
    constructor (props) {
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
                this.props.history.push("/app/category/category");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        return (
            <div>

                <div>
                    <Card>
                        <Row className="m-1">
                            <Col >
                                <h3 col-sm-6 className="float-left">
                                    <BsFillPersonFill /> General Information
                                </h3>
                            </Col>
                        </Row>
                        <CardBody>
                            <Form className="m-1" onSubmit={this.submitHandler}>
                                <Row className="mb-2">
                                    <Col lg="6" md="6" className="mb-2">

                                        <Label>First Name</Label>
                                        <Input
                                            type="text"
                                            name="type"
                                            value={this.state.type}
                                            onChange={this.changeHandler}
                                        >
                                        </Input>
                                    </Col>
                                    <Col lg="6" md="6" className="mb-1">
                                        <Label>Last Name</Label>
                                        <Input
                                            type="text"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                        </Input>
                                    </Col>

                                    <Col lg="6" md="6" className="mb-1">
                                        <Label>Identity Type</Label>
                                        <Input
                                            required
                                            type="select"
                                            name="bannertype"
                                            placeholder="Enter Identity Type"
                                            value={this.state.bannertype}
                                            onChange={this.changeHandler}>
                                            <option value="select">--Select--</option>
                                            <option value="Passport">Passport</option>
                                            <option value="Driving License">Driving License</option>
                                            <option value="Nid">Nid</option>
                                            <option value="Company id">Company id</option>
                                        </Input>
                                    </Col>
                                    <Col lg="6" md="6" className="mb-1">
                                        <Label>Identity No.</Label>
                                        <Input
                                            type="text"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                        </Input>
                                    </Col>
                                    <Col lg="6" md="6" className="mb-1">
                                        <Label>Phone No.</Label>
                                        <Input
                                            type="text"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                        </Input>
                                    </Col>
                                    <Col lg="6" md="6" className="mb-1">
                                        <Label>Address</Label>
                                        <Input
                                            type="text"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                        </Input>
                                    </Col>
                                    <Col lg="6" md="6" className="mb-1">
                                        <Label>Deliveryman Image</Label>
                                        <CustomInput
                                            required
                                            type="file"
                                            name="date"
                                            value={this.state.date}
                                            onChange={this.changeHandler}
                                        ></CustomInput>
                                    </Col>
                                    <Col lg="6" md="6" className="mb-1">
                                        <Label>Identify Image</Label>
                                        <CustomInput
                                            required
                                            type="file"
                                            name="date"
                                            value={this.state.date}
                                            onChange={this.changeHandler}
                                        ></CustomInput>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </div >

            </div >
        );
    }
}
export default GeneralInformation;
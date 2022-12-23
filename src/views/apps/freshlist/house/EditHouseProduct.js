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

export class EditHouseProduct extends Component {
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
                this.props.history.push("/app/freshlist/house/HouseProductList");
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
                                Update New Product
                            </h1>
                        </Col>
                        <Col>
                            <Button
                                className=" btn btn-danger float-right"
                                onClick={() => history.push("/app/freshlist/house/houseProductList")}
                            >
                                Back
                            </Button>
                        </Col>
                    </Row>
                    <CardBody>
                        <Form className="m-1" onSubmit={this.submitHandler}>
                            <Row className="mb-2">
                                <Col lg="6" md="6" className="mb-2">

                                    <Label>Name</Label>
                                    <Input
                                        type="text"
                                        placeholder="Product Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-2">

                                    <Label>Description</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-2">

                                    <Label>Category</Label>
                                    <CustomInput
                                        type="select"
                                        placeholder="CategoryName"
                                        name="type"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    >
                                        <option>---Select---</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </CustomInput>
                                </Col>
                                <Col lg="6" md="6" className="mb-2">

                                    <Label>Subcategory</Label>
                                    <CustomInput
                                        type="select"
                                        placeholder="Subcategory Name"
                                        name="type"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    >
                                        <option>---Select---</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </CustomInput>
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Product Code</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="name"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Brand</Label>
                                    <CustomInput
                                        type="select"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    >
                                        <option>---Select---</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </CustomInput>
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Units</Label>
                                    <CustomInput
                                        type="select"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    >
                                        <option>---Select Units---</option>
                                        <option value="Kg">Kg</option>
                                        <option value="gms">gms</option>
                                        <option value="pc">pc</option>
                                        <option value="ltr">ltr</option>
                                    </CustomInput>
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Attributes</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Tax</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Discount</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Total Quantity</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Minimum Order Quantity</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Shipping Cost</Label>
                                    <Input
                                        type="number"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Upload Product Images</Label>
                                    <CustomInput
                                        type="file"
                                        placeholder=""
                                        name=""
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Button.Ripple
                                    color="primary"
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
export default EditHouseProduct;
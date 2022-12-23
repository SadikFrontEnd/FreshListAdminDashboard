import React, { Component } from "react";
import VendorInformation from "./VendorInformation";
import Account from "./Account";
import ShopInformation from "./ShopInfomation";
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

export class AddVendor extends Component {
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
                <Col sm="12">
                    <Col>
                        <h1 sm="12">
                            <VendorInformation />
                        </h1>
                    </Col>
                </Col>
                <Col sm="12">
                    <Col>
                        <h1 sm="12">
                            <Account />
                        </h1>
                    </Col>
                </Col>
                <Col sm="12">
                    <Col >
                        <h1 sm="12">
                            <ShopInformation />
                        </h1>
                    </Col>
                </Col>
            </div >


        );
    }
}
export default AddVendor;
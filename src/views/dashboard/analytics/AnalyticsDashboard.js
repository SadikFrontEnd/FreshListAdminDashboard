import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import axios from "axios";
import DispatchedOrders from "./DispatchedOrders";
import "../../../assets/scss/pages/dashboard-analytics.scss";
import {
  FcNews,
  FcSalesPerformance,
  FcRules,
  FcCancel,
  FcShop,
  FcOk,
  FcShipped,
  FcBusinessman,
} from "react-icons/fc";
import { FaWallet, Facart, FaCartArrowDown, FaBoxOpen } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineCloseCircle } from "react-icons/ai";

class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      customer: {},
      store: {},
      seller: {},
      order: {},
      banner: {},
      brand: {},
      total_sub: {},
      Coupon: {},
    };
  }

  componentDidMount() {
    axiosConfig
      .get("/totalproduct")
      .then((response) => {
        console.log(response.data);
        this.setState({ product: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://35.154.86.59/api/user/totalcustomer")
      .then((response) => {
        console.log(response.data);

        this.setState({ customer: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/totalstore")
      .then((response) => {
        console.log(response.data);
        this.setState({ store: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/totalsale")
      .then((response) => {
        console.log(response.data);
        this.setState({ sale: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/totalorder")
      .then((response) => {
        console.log(response.data);
        console.log(response.data.data);
        this.setState({ order: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/totalbrand")
      .then((response) => {
        console.log(response.data);
        this.setState({ brand: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/totalbanner")
      .then((response) => {
        console.log(response.data);
        this.setState({ banner: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/gettotalcoupon")
      .then((response) => {
        console.log(response.data);
        this.setState({ Coupon: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/total_sub")
      .then((response) => {
        console.log(response.data);
        this.setState({ total_sub: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          {/* <Col lg="3" md="12">
            <Card
              className="bg-secondary"
              body
              inverse
              style={{ borderColor: "white" }}
            > */}
          {/* <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <FaBoxOpen style={{ color: 'orange' }} />&nbsp;&nbsp;
                Total Products
              </CardTitle> */}

          {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.product.data}
              </CardText> */}
          {/* </Card>
          </Col> */}
          {/* <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <FcBusinessman />&nbsp;&nbsp;
                Total Customer
              </CardTitle>

              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.customer.data}
              </CardText> */}
          {/* </Card>
          </Col> */}
          {/* <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <FcShop />&nbsp;&nbsp;
                Total Store
              </CardTitle> */}

          {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.store.data}
              </CardText> */}
          {/* </Card>
          </Col> */}
          {/* <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <FcSalesPerformance />&nbsp;&nbsp;
                Total Sale
              </CardTitle>

              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.sale.data}
              </CardText> */}
          {/* </Card>
          </Col> */}

          <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <FcNews />
                &nbsp;&nbsp; Pending(05)
              </CardTitle>

              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.brand.data}
              </CardText> */}
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <FcOk />
                &nbsp;&nbsp;Confirmed(20)
              </CardTitle>
              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.banner.data}
              </CardText> */}
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <BsBoxSeam style={{ color: "cornflowerblue" }} />
                &nbsp;&nbsp;Packaging(35)
              </CardTitle>
              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.total_sub.data}
              </CardText> */}
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <FcShipped />
                &nbsp;&nbsp;Out for delivery(39)
              </CardTitle>
              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <TbTruckDelivery />
                &nbsp;&nbsp;Delivered(29)
              </CardTitle>
              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <FcCancel />
                &nbsp;&nbsp;Cancelled(00)
              </CardTitle>
              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <FcRules />
                &nbsp;&nbsp; Returned (00)
              </CardTitle>
              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card className="bg-secondary" body inverse>
              <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                <AiOutlineCloseCircle />
                &nbsp;&nbsp; Failed to delivery (02)
              </CardTitle>
              {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
            </Card>
          </Col>
        </Row>
        {/* <div style={{ backgroundColor: 'white' }}>
          <h4 className="mb-1"> <FaWallet
            style={{ color: 'brown' }} />&nbsp;&nbsp;Admin Wallet</h4>
          <Row> */}
        {/* <Col lg="3" md="12">
              <Card className="bg-secondary" body inverse>
                <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                  In-House Earning
                </CardTitle>
                {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
        {/* </Card> */}
        {/* </Col>  */}
        {/* <Col lg="3" md="12">
              <Card className="bg-secondary" body inverse>
                <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                  Commission Earned
                </CardTitle>
                {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
        {/* </Card>
            </Col> */}
        {/* <Col lg="3" md="12">
              <Card className="bg-secondary" body inverse>
                <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                  Delivery Charge Earned
                </CardTitle>
                {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
        {/* </Card>
            </Col> */}
        {/* <Col lg="3" md="12">
              <Card className="bg-secondary" body inverse>
                <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                  Pending Amount
                </CardTitle>
                {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
        {/* </Card>
            </Col> */}
        {/* <Col lg="3" md="12">
              <Card className="bg-secondary" body inverse>
                <CardTitle className="mb-1" tag="h4" style={{ color: "black" }}>
                  Total Tax Collected
                </CardTitle>
                {/* <CardText tag="h3" style={{ color: "white" }}>
                {this.state.Coupon.data}
              </CardText> */}
        {/* </Card>
            </Col> */}
        {/* </Row>
        </div> */}
        {/* <div style={{ backgroundColor: "white" }}> */}
        {/* <Row>
          <Col lg="6" md="12">
            <Row><h3 className="mb-2"><b>Top Selling Category</b></h3></Row>
          </Col>

          <Col lg="6" md="12">
            <Row><h3><b>Top Popular Zone</b></h3></Row>
          </Col>
          <Col lg="6" md="12"><h4>Mart &nbsp;&nbsp;&nbsp;</h4>
            <h4>Digital Seller&nbsp;&nbsp;&nbsp;</h4>
            <h4>Deluxe Online&nbsp;&nbsp;&nbsp;</h4>
            <h4>Wellness Fair&nbsp;&nbsp;&nbsp;</h4>

          </Col>
          <Col lg="6" md="12">
            <h4>Wellness Fair &nbsp;&nbsp;&nbsp;<FaCartArrowDown /></h4>
            <h4>Mart Morning &nbsp;&nbsp;&nbsp;<FaCartArrowDown /></h4>
            <h4>Digital Seller &nbsp;&nbsp;&nbsp;<FaCartArrowDown /></h4>
            <h4>Deluxe Online &nbsp;&nbsp;&nbsp;<FaCartArrowDown /></h4>
          </Col>

        </Row> */}
        {/* </div> */}
      </React.Fragment>
    );
  }
}
export default AnalyticsDashboard;

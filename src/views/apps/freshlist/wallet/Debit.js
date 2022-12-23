import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Badge,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import axios from "axios";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";

class Debit extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 150,
        filter: true,
      },
      {
        headerName: " Name",
        field: "username",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.username}</span>
            </div>
          );
        },
      },
      {
        headerName: "Mobile",
        field: "mobile",
        filter: true,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.mobile}</span>
            </div>
          );
        },
      },
      {
        headerName: "Type",
        field: "type",
        filter: true,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.type}</span>
            </div>
          );
        },
      },

      {
        headerName: "Date",
        field: "createAt",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.createAt}</span>
            </div>
          );
        },
      },
      {
        headerName: "Order ID",
        field: "orderid",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.orderid}</span>
            </div>
          );
        },
      },

      {
        headerName: "Account",
        field: "account",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.account}</span>
            </div>
          );
        },
      },
      {
        headerName: "Remarks",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "true" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "false" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Eye
                className="mr-50"
                size="25px"
                color="green"
                onClick={() =>
                  history.push(
                    `/app/freshlist/customer/viewCustomer/${params.data._id}`
                  )
                }
              />
              <Edit
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() =>
                  history.push(
                    `/app/freshlist/customer/editCustomer/${params.data._id}`
                  )
                }
              />
              <Trash2
                className="mr-50"
                size="25px"
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };

  async componentDidMount() {
    await axiosConfig.get("/user/userlist").then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }
  async runthisfunction(id) {
    console.log(id);
    await axios.get(`/user/dlt_user/${id}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };
  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      console.log(rowData),
      (
        <Row className="app-user-list">
          <Col sm="12">
            <h2> Select Date Range</h2>
            <Card>
              <CardBody>
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <Row>
                    {/* <Col lg="3" className="mb-2">
                      <Label>All</Label>
                      <Input
                        required
                        type="select"
                        name="bannertype"
                        placeholder=""
                        value={this.state.bannertype}
                        onChange={this.changeHandler}
                      >
                        <option value="select">--Select--</option>
                        <option value="All">All</option>
                        <option value="In-house">In-house</option>
                        <option value="Seller">Seller</option>
                      </Input>
                    </Col> */}
                    <Col lg="8" className="">
                      <Row>
                        <Col lg="3" className="mb-2">
                          <Label>Start Date</Label>
                          <Input
                            required
                            type="date"
                            name="bannertype"
                            placeholder=""
                            value={this.state.bannertype}
                            onChange={this.changeHandler}
                          ></Input>
                        </Col>
                        <Col lg="3" className="mb-2">
                          <Label>End Date</Label>
                          <Input
                            required
                            type="date"
                            name="bannertype"
                            placeholder=""
                            value={this.state.bannertype}
                            onChange={this.changeHandler}
                          ></Input>
                        </Col>
                        <Col lg="3" md="2">
                          <Label>Mobile</Label>
                          <Input
                            type="number"
                            placeholder="Enter Here"
                            name="mobile"
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                          />
                        </Col>
                        <Col lg="3" md="2">
                          <Label>Amount</Label>
                          <Input
                            type="number"
                            placeholder="Enter Here"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.changeHandler}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="4" className="mt-1">
                      <Button
                        sm="6"
                        className="float-right"
                        color="primary"
                        onClick={() =>
                          history.push(`/app/freshlist/wallet/AddTransactions`)
                        }
                      >
                        Add Transactions
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Debit<Badge pill>{rowData.length}</Badge>
                  </h1>
                </Col>
              </Row>
              <CardBody>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="mb-1">
                        <UncontrolledDropdown className="p-1 ag-dropdown">
                          <DropdownToggle tag="div">
                            {this.gridApi
                              ? this.state.currenPageSize
                              : "" * this.state.getPageSize -
                                (this.state.getPageSize - 1)}{" "}
                            -{" "}
                            {this.state.rowData.length -
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}
                            >
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}
                            >
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}
                            >
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}
                            >
                              134
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mb-1">
                        <div className="table-input mr-1">
                          <Input
                            placeholder="search..."
                            onChange={(e) =>
                              this.updateSearchQuery(e.target.value)
                            }
                            value={this.state.value}
                          />
                        </div>
                        <div className="export-btn">
                          <Button.Ripple
                            color="primary"
                            onClick={() => this.gridApi.exportDataAsCsv()}
                          >
                            Export as CSV
                          </Button.Ripple>
                        </div>
                      </div>
                    </div>
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      )
    );
  }
}
export default Debit;

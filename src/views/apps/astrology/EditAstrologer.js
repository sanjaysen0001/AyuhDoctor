import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
// import { data } from "jquery";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

export default class EditAstrologer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approvedstatus: "",
      status: "",
    };
  }
  changeHandler1 = (e) => {
    this.setState({ approvedstatus: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ status: e.target.value });
  };
  // componentDidMount() {
  //   let { id } = this.props.match.params;
  //   axiosConfig
  //     .get(`/admin/viewoneabout/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         desc: response.data.data.desc,

  //         //   dealer: response.data.data.dealer,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
    .post(`/user/status_change/${id}`, this.state)
    .then((response) => {
      console.log(response);
      swal("Success!", "Submitted SuccessFull!", "success");
      this.props.history.push(`/app/astrology/astrologerList`);
    })
    .catch((error) => {
      console.log(error.response);
    })
    
    axiosConfig
      .post(`/admin/updteApprovedsts/${id}`, this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/astrology/astrologerList`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Doctor"
          breadCrumbParent="Home"
          breadCrumbActive=" Edit Doctor "
        />
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>
                {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
                    Material List
                </BreadcrumbItem> */}
                <BreadcrumbItem active>Edit Doctor</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Doctor
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/astrology/astrologerList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Online"
                    />
                    <span style={{ marginRight: "20px" }}>Online</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Offline"
                    />
                    <span style={{ marginRight: "3px" }}>Offline</span>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="approvedstatus"
                      value="true"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="approvedstatus"
                      value="false"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Doctor Name"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Mobile No."
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Experience</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Doctor Name"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Age</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Age"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Language</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Doctor Name"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expart</Label>
                  <Input
                    type="text"
                    // name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    // rows="3"
                    placeholder="Enter Age"
                  />
                </Col> */}
              </Row>

              <Row>
                <Col
                  lg="6"
                  md="6"
                  sm="6"
                  className="mb-2"
                  style={{ marginLeft: "15px" }}
                >
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
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

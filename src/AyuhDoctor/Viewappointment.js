import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Label,
  Input,
} from "reactstrap";
import { history } from "../history";
import "../assets/scss/pages/app-ecommerce-shop.scss";
import "../assets/scss/pages/users.scss";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

import axiosConfig from "../axiosConfig";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import axios from "axios";
class Viewappointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: {},
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/patientPanel-appointment/viewbyid/${id}`)
      .then((response) => {
        console.log(response.data.Appointment);
        this.setState({ appointment: response.data.Appointment });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {/* <Breadcrumbs
            breadCrumbTitle="Customer"
            breadCrumbParent="Home"
            breadCrumbActive="View Customer "
          /> */}
          <Row>
            <Col sm="12">
              <div></div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Appointment
                </h1>
              </Col>
              <Col>
                <Link to={"/Appointment-management/Appointment"}>
                  <Button className=" btn btn-danger float-right">Back</Button>
                </Link>
              </Col>
            </Row>
            <CardBody className="pb-2 ">
              <Row className="ml-4">
                <Col sm="9" md="12" lg="12">
                  <Row>
                    <Col sm="12" md="4" lg="4">
                      <Label> AppointmentType</Label>
                      <Input
                        type="text"
                        name=""
                        value={this.state.appointment?.appointmentType}
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col sm="12" md="4" lg="4">
                      <Label> Patient Name</Label>
                      <Input
                        type="text"
                        name=""
                        value={this.state.data.fullname}
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col sm="12" md="4" lg="4">
                      <Label>Doctor Name</Label>
                      <Input
                        type="text"
                        name=""
                        value={this.state.appointment?.appointmentType}
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col sm="12" md="4" lg="4">
                      <Label>Status</Label>
                      <Input
                        type="text"
                        name=""
                        value={this.state.appointment?.appointmentType}
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col sm="12" md="4" lg="4">
                      <Label> Amount</Label>
                      <Input
                        type="text"
                        name=""
                        value={this.state.appointment?.appointmentType}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Viewappointment;

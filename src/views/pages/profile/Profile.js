import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
  CustomInput,
  FormGroup,
} from "reactstrap";
import "../../../assets/scss/pages/users-profile.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      cnfmPassword: "",
      password: "",
      adminimg: "",
      selectedName: "",
      selectedFile: null,
      data: {},
      fromTimeFormatted: "", // State to store formatted time
      toTimeFormatted: "", // State to store formatted time
    };
  }

  componentDidMount() {
    const userId = localStorage.getItem("userId");
    axiosConfig
      .get(`/doctorPanel/viewById/${userId}`)
      .then((response) => {
        const {
          fullname,
          email,
          mobileNumber,
          date,
          consulting,
          physicianVisitFees,
          ratePerMin,
          fromTime,
          toTime,
          consultingFeesCharge,
          days,
        } = response.data.data;
        this.setState({
          data: response.data.data,
          name: fullname,
          email: email,
          mobile: mobileNumber,
          dob: date,
          consulting: consulting,
          physicianVisitFees: physicianVisitFees,
          ratePerMin: ratePerMin,
          fromTime: fromTime,
          toTime: toTime,
          consultingFeesCharge: consultingFeesCharge,
          days: days,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response.data);
      });
  }

  changeHandler = (e) => {
    const { name, value } = e.target;

    // Format time to AM/PM
    if (name === "fromTime" || name === "toTime") {
      const time = new Date();
      const [hours, minutes] = value.split(":");
      time.setHours(parseInt(hours));
      time.setMinutes(parseInt(minutes));
      const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      this.setState({
        [name]: value,
        [`${name}Formatted`]: formattedTime,
      });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleProfile = (e) => {
    this.setState({ profile: e.target.files[0] });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      fromTime,
      toTime,
      ratePerMin,
      physicianVisitFees,
      days,
      mobile,
      dob,
      profile,
    } = this.state;
    const data = new FormData();
    data.append("fullname", name);
    data.append("email", email);
    data.append("fromTime", fromTime);
    data.append("toTime", toTime);
    data.append("ratePerMin", ratePerMin);
    data.append("physicianVisitFees", physicianVisitFees);
    data.append("days", days);
    data.append("mobileNumber", mobile);
    data.append("date", dob);
    if (profile) {
      data.append("image", profile);
    }

    const userId = localStorage.getItem("userId");
    axiosConfig
      .put(`/doctorPanel/doctor-edit/${userId}`, data, {
        headers: {
          "ad-token": localStorage.getItem("ad-token"),
        },
      })
      .then((response) => {
        swal("Success!", "Profile updated successfully!", "success");
        this.componentDidMount(); // Refresh data after update
      })
      .catch((error) => {
        swal("Error!", "Update failed, please try again.", "error");
        console.error("Error updating profile:", error.response);
      });
  };

  render() {
    const {
      data,
      name,
      email,
      mobile,
      dob,
      fromTime,
      toTime,
      physicianVisitFees,
      ratePerMin,
      days,
    } = this.state;

    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Profile"
        />
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
            <Col lg="4" md="4" xl="4" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <div className="profile-img text-center st-1">
                  <img
                    src={`https://sample.rupioo.com/Images/${data.image}`}
                    alt="adminimg"
                    className="img-fluid img-border rounded-circle box-shadow-1"
                    width="150"
                  />
                  <ul className="lst-1">
                    <li className="lst-2">
                      Name: <span className="lst-3">{data.fullname}</span>
                    </li>
                    <li className="lst-2">
                      Mobile: <span className="lst-3">{data.mobileNumber}</span>
                    </li>
                    <li className="lst-2">
                      Email: <span className="lst-3">{data.email}</span>
                    </li>
                    <li className="lst-2">
                      Date: <span className="lst-3">{data.date}</span>
                    </li>
                    <li className="lst-2">
                      Schedule FromTime:
                      <span className="lst-3">{data.fromTime}</span>
                    </li>
                    <li className="lst-2">
                      toTime : <span className="lst-3">{data.toTime}</span>
                    </li>
                    <li className="lst-2">
                      Consulting Fee:
                      <span className="lst-3">
                        Rs {data.physicianVisitFees}/-
                      </span>
                    </li>
                    <li className="lst-2">
                      Rate Per Min:
                      <span className="lst-3">Rs {data.ratePerMin}/-</span>
                    </li>
                    <li className="lst-2">
                      Days: <span className="lst-3">{data.days}</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col
              sm="12"
              xl="8"
              lg="8"
              md="8"
              className="d-flex justify-content-center"
            >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="st-2">
                    <CardTitle>
                      <h4 className="mb-3">Edit Profile</h4>
                    </CardTitle>
                    <Row className="m-0">
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <Label>Mobile No.</Label>
                        <Input
                          type="number"
                          name="mobile"
                          placeholder="Mobile No."
                          value={mobile}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <Label>DOB</Label>
                        <Input
                          type="date"
                          name="dob"
                          value={dob}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <Label>From Time</Label>
                        <Input
                          type="time"
                          name="fromTime"
                          placeholder="From Time"
                          value={fromTime}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <Label>To Time</Label>
                        <Input
                          type="time"
                          name="toTime"
                          placeholder="To Time"
                          value={toTime}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <Label>Consulting Fee</Label>
                        <Input
                          type="number"
                          name="physicianVisitFees"
                          placeholder="Consulting Fee"
                          value={this.state.physicianVisitFees}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <Label> Rate Per Min </Label>
                        <Input
                          type="number"
                          name="ratePerMin"
                          placeholder=" Rate Per Min"
                          value={this.state.ratePerMin}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <Label>Profile Update </Label>
                        <Input
                          type="file"
                          name="profile"
                          onChange={this.handleProfile}
                        />
                      </Col>
                      <Col className="mb-1" lg="4" md="4" xl="4" sm="12">
                        <FormGroup>
                          <Label> Days </Label>
                          <CustomInput
                            type="select"
                            id="1"
                            name="days"
                            value={this.state.days}
                            onChange={this.changeHandler}
                          >
                            <option value="">Select Days</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                          </CustomInput>
                        </FormGroup>
                      </Col>
                      <Col
                        className="mt-1 float-right"
                        lg="8"
                        md="8"
                        xl="8"
                        sm="12"
                      >
                        <Button color="primary" type="submit">
                          Update
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default Profile;

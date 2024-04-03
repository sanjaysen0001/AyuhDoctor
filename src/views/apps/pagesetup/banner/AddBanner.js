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
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class AddBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner_title: "",
      root: "",
      status: "",
      banner_img: "",
      selectedFile: undefined,
      selectedName: "",
      pages: [],
    };
  }
  componentDidMount() {
    axiosConfig
      .get(`/admin/getPages`)
      .then((res) => {
        this.setState({ pages: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
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
    console.log(this.state.root);
    e.preventDefault();
    const data = new FormData();
    data.append("banner_title", this.state.banner_title);
    data.append("root", this.state.root);
    data.append("status", this.state.status);

    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("banner_img", file, file.name);
      }
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    axiosConfig
      .post("admin/addbanner", data)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/pagesetup/banner/bannerList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/pagesetup/banner/bannerList" tag="a">
                  Banner List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add Banner</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Banner
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-success float-right"
                    onClick={() =>
                      history.push("/app/pagesetup/banner/bannerList")
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
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="banner_title"
                    placeholder=""
                    value={this.state.banner_title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Add Route</Label>
                  <select
                    className="form-control"
                    // required
                    name="root"
                    value={this.state.root}
                    onChange={this.changeHandler}
                  >
                    <option value="">-Select--</option>
                    <option value="kundaliform">Match Making</option>
                    <option value="allastrologerlist">
                      All Doctor List
                    </option>
                    <option value="liveAstrologer">LiveStreaming </option>
                    <option value="manglikdosh">Manglikdosh</option>
                    <option value="pitraDosh">PitraDosh</option>
                    <option value="kalsharpDosh">kalsharpDosh</option>
                    <option value="heroscopestwo">Daily Horoscope</option>
                    <option value="heroscopestwo1">Weekly Horoscope</option>
                    <option value="heroscopestwo2">Monthly Horoscope</option>
                    <option value="astromallList">AstromallList</option>
                    <option value="bookEvent">Book Pooja</option>
                    <option value="basicPanchang">BasicPanchang</option>
                    <option value="todayPanchang">TodayPanchang</option>
                    <option value="aboutdetail">About Us</option>
                    <option value="contact">Contact Us</option>
                    <option value="TermsOfUse">TermsOfUse</option>
                    <option value="privacyPolicy">PrivacyPolicy</option>
                    <option value="blog-no-sidebar">Blogs</option>
                    <option value="Faq">Faq</option>
                  </select>
                  {/* <Input
                    required
                    type="text"
                    name="root"
                    placeholder=""
                    value={this.state.root}
                    onChange={this.changeHandler}
                  ></Input> */}
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    multiple
                    onChange={this.onChangeHandler}
                  />
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
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
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

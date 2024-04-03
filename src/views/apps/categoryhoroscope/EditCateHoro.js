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
  FormGroup,
} from "reactstrap";
//import axios from "axios";
import axiosConfig from "../../../axiosConfig";
// import { useParams } from "react-router-dom";
//import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { EditorState } from "draft-js"
import { data } from "jquery";
import swal from "sweetalert";
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "../../../assets/scss/plugins/extensions/editor.scss"

export class EditCateHoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      desc: "",
    };
  }


  state = {
    editorState: EditorState.createEmpty()
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    })
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/addCategory", this.state)

      .then((response) => {
        console.log(response.data);

        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/horoscope/horoscopecategory");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Add Horoscope"
          breadCrumbParent=" Horoscope Mangement"
          breadCrumbActive="Add Horoscope"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                  Add Horoscope
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/customer/customerList")}
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
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  >
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Rashi</Label>
                  <Input
                    required
                    type="text"
                    name="category"
                    placeholder="Enter MRP"
                    value={this.state.category}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Category</Label>
                    <Input
                      required
                      type="text"
                      name="category"
                      placeholder="Enter MRP"
                      value={this.state.category}
                      onChange={this.changeHandler}
                    ></Input>
               </Col>
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Long  Description</Label>
                    <Editor
                      // editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    />
                </Col>
              </Row>
              {/* <Col lg="6" md="6" sm="6" className="mb-2">
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
              </Col> */}
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Save
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
export default EditCateHoro;

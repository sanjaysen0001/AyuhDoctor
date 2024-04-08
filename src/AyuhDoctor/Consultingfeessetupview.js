import React from 'react'
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap'
import { history } from '../history'
import '../assets/scss/pages/app-ecommerce-shop.scss'
import '../assets/scss/pages/users.scss'
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

import axiosConfig from '../axiosConfig'
import { Link } from 'react-router-dom/cjs/react-router-dom'
// import axios from "axios";
class Consultingfeessetupview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    let { id } = this.props.match.params
    axiosConfig
      .get(`/user/viewoneuser/${id}`)

      .then((response) => {
        //console.log(response.data);
        console.log(response.data.data)
        this.setState({ data: response.data.data })
      })
      .catch((error) => {
        console.log(error.response)
      })
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
              <div>
               
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Consulting Fees Setup


                </h1>
              </Col>
              <Col>
              <Link to={'/Finance-management/Consulting-fees-setup'}>
                <Button
                  className=" btn btn-danger float-right"
                  
                >
                  Back
                </Button>
                </Link>
              </Col>
            </Row>
            <CardBody className="pb-3">
              <Row className="ml-4">
                <Col sm="9" md="12" lg="12">
                  <div className="users-page-view-table">
                    <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                   Doctor Name
                    </div>
                    <div className="text-truncate">
                      <span>Dr. Vivek</span>
                    </div>
                  </div> 
                  <div className="d-flex user-info">
                  <div className="user-info-title font-weight-bold">
                  Patinet Name
                  </div>
                  <div className="text-truncate">
                    <span>{this.state.data.fullname}</span>
                  </div>
                </div>
                    

                  
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                     Patinet Id
                      </div>
                      <div className="text-truncate">
                        <span>ay-110</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                   Consulting Type
                    </div>
                    <div className="text-truncate">
                      <span>Video Call</span>
                    </div>
                  </div> 
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                   Consulting Fees
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.data.amount}</span>
                    </div>
                  </div> 
                  

                   
                   
                    
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    )
  }
}

export default Consultingfeessetupview

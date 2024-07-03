import React, { useState, useEffect } from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axios from "axios";
import * as Icon from "react-feather";
import { useHistory } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";

const NavbarUser = () => {
  const [doctorView, setDoctorView] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem("ad-token");

      if (!token) {
        sessionStorage.clear();
        history.replace("/#/pages/login");
        return;
      }

      try {
        const userId = localStorage.getItem("userId");
        const response = await axiosConfig.get(
          `/doctorPanel/viewById/${userId}`
        );
        setDoctorView(response.data.data);
      } catch (error) {
        console.error(
          "Something went wrong while fetching notifications.",
          error
        );
      }
    };

    fetchNotifications();
  }, [history]);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    history.push(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("ad-token");
    localStorage.clear();
    history.replace("/#/pages/login");
  };

  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name text-bold-600" color="#fff">
              {doctorView?.fullname}
            </span>
          </div>
          <span data-tour="user">
            <img
              src={`https://sample.rupioo.com/Images/${doctorView.image}`}
              className="round"
              height="40"
              width="40"
              alt="avatar"
            />
          </span>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag="a"
            href="#"
            onClick={(e) => handleNavigation(e, "/#/pages/profile")}
          >
            <Icon.User size={14} className="mr-50" />
            <span className="align-middle">Edit Profile</span>
          </DropdownItem>

          <DropdownItem divider />
          <DropdownItem tag="a" onClick={handleLogout}>
            <Icon.Power size={14} className="mr-50" />
            <span className="align-middle">Log Out</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
};

export default NavbarUser;

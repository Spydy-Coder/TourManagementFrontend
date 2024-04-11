import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { IoAddCircleSharp } from "react-icons/io5";
import "./SidebarCustom.css";

export default function SidebarCustom(windowWidth) {
  return (
    <div
      style={{ height: "100vh", minHeight: "400px", display: "flex" }}
      className="sticky-top "
    >
      <Sidebar className={windowWidth <= 694 ? "sidebar collapsed collapsedWidth='70px'" : "sidebar "} >
        <Menu>
          <MenuItem
            className="menu-item"
            active
            icon={<RiDashboardFill size={28} style={{ color: "#433D3C" }} />}
            component={<Link to="/admin/dashboard" />}
          >
            <h5 className="text-muted">Dashboard</h5>
          </MenuItem>
          <MenuItem
            className="menu-item"
            icon={<IoAddCircleSharp size={30} style={{ color: "#433D3C" }} />}
            component={<Link to="/create" />}
          >
            <h5 className="text-muted">Create</h5>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

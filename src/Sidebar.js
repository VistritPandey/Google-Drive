import React from "react";
import NewFile from "./NewFile";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <NewFile />
      <div className="sidebar__itemsContainer">
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;

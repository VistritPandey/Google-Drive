import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function index() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <span>Drive</span>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search in Drive" />
        <ExpandMoreIcon />
      </div>
      <div className="header__icons">
        <HelpOutlineIcon />
        <SettingsIcon />
        <AppsIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default index;

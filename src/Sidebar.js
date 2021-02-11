import React from "react";
import NewFile from "./NewFile";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StorageIcon from "@material-ui/icons/Storage";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Sidebar() {
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="sidebar">
      <NewFile />
      <div className="sidebar__itemsContainer">
        <SidebarItem arrow icon={<InsertDriveFileIcon />} label={"My Drive"} />
        <SidebarItem arrow icon={<ImportantDevicesIcon />} label={"Computer"} />
        <SidebarItem icon={<PeopleAltIcon />} label={"Shared with me"} />
        <SidebarItem icon={<QueryBuilderIcon />} label={"Recent"} />
        <SidebarItem icon={<StarBorderIcon />} label={"Starred"} />
        <SidebarItem icon={<DeleteOutlineIcon />} label={"Bin"} />
        <hr />
        <SidebarItem icon={<StorageIcon />} label={"Storage"} />
      </div>
      <div className="sidebar__foot">
        <Button onClick={signOut} variant="contained" color="secondary">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;

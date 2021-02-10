import React from "react";
import "./FilesView.css";

function FilesView() {
  return (
    <div className="filesView">
      <div className="filesView__row"></div>
      <div className="filesView__titles">
        <div className="filesView__titles--left">
          <p>Name</p>
        </div>
        <div className="filesView__titles--right">
          <p>Last Modified</p>
          <p>File Size</p>
        </div>
      </div>
    </div>
  );
}

export default FilesView;

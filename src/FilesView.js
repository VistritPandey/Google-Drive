import React, { useState } from "react";
import "./FilesView.css";
import { db } from "./firebase";

function FilesView() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshot) => {
      console.log(files);
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);
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

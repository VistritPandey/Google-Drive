import React, { useState } from "react";
import "./FilesView.css";
import { db } from "./firebase";
import FileCard from "./FileCard";

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
    <div className="fileView">
      <div className="fileView__row">
        {files.slice(0, 5).map(({ id, item }) => (
          <FileCard name={item.caption} />
        ))}
      </div>
      <div className="fileView__titles">
        <div className="fileView__titles--left">
          <p>Name</p>
        </div>
        <div className="fileView__titles--right">
          <p>Last modified</p>
          <p>File size</p>
        </div>
      </div>
      {files.map((file) => (
        <FileItem
          id={file.item.id}
          caption={file.item.caption}
          timestamp={file.item.timestamp}
          fileUrl={file.item.fileUrl}
          size={file.item.size}
        />
      ))}
    </div>
  );
}

export default FilesView;

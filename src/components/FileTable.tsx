import React from "react";

type FileData = {
  id: number;
  name: string;
  uploadDateTime: string;
};

interface FileTableProps {
  files: FileData[];
  onView: (id: number) => void;
  onDelete: (id: number) => void;
}

const FileTable: React.FC<FileTableProps> = ({ files, onView, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow flex flex-col px-15 text-xs">
      <h2 className="flex justify-start font-bold py-5">Your Files</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderRadius: "10px",
        }}
      >
        <thead style={{ backgroundColor: "#dddddd" }}>
          <tr>
            <th
              style={{
                padding: "8px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              No.
            </th>
            <th
              style={{
                padding: "8px",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "8px",
              }}
            >
              Upload Date & Time
            </th>
            <th
              style={{
                padding: "8px",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={4}
              style={{ height: "10px", backgroundColor: "#fff" }}
            ></td>
          </tr>
          {files.map((file) => (
            <tr key={file.id}>
              <td style={{ padding: "8px" }}>{file.id}</td>
              <td style={{ padding: "8px" }}>{file.name}</td>
              <td style={{ padding: "8px" }}>{file.uploadDateTime}</td>
              <td style={{ padding: "8px" }}>
                <button
                  onClick={() => onView(file.id)}
                  style={{
                    border: "1px solid #dddddd",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  View
                </button>
                <button
                  onClick={() => onDelete(file.id)}
                  style={{
                    padding: "5px 10px",
                    color: "red",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    border: "1px solid #dddddd",
                    borderRadius: "5px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;

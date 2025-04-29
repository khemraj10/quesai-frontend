// components/YoutubeUploadModal.tsx

import { X } from "lucide-react";
import React, { useState } from "react";
import Modal from "react-modal";

interface YoutubeUploadModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const YoutubeUploadModal: React.FC<YoutubeUploadModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [name, setName] = useState<string>("");
  const [transcript, setTranscript] = useState<string>("");

  const handleUpload = () => {
    console.log("Name:", name);
    console.log("Transcript:", transcript);
    setName("");
    setTranscript("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          padding: "0.5rem 1rem",
          borderRadius: "16px",
          width: "600px",
          maxWidth: "90%",
          outline: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
      }}
      ariaHideApp={false}
    >
      <div className="flex p-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="red"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-youtube-icon lucide-youtube"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </svg>
          <h2 className="font-bold">Upload from Youtube</h2>
        </div>
        <button onClick={onRequestClose}>
          <X size={20} />
        </button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            border: "1px solid #000000",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="transcript">Transcript</label>
        <textarea
          id="transcript"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            border: "1px solid #000000",
            borderRadius: "4px",
          }}
          rows={3}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleUpload}
          style={{
            backgroundColor: "#000000",
            color: "#fff",
            padding: "5px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "0.9rem",
            marginBottom: "2rem",
          }}
        >
          Upload
        </button>
      </div>
    </Modal>
  );
};

export default YoutubeUploadModal;

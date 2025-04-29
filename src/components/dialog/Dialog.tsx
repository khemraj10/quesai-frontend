"use client";

// import { X } from "lucide-react";
import { useState } from "react";
import Modal from "react-modal";
import styles from "../../styles/Dialog.module.css";

const Dialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  const handleCreate = () => {
    if (!projectName) {
      setError("Project Name can't be empty");
      return;
    }

    setError("");
    console.log("Project Created", projectName);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create Project Modal"
      className={styles.customModal}
      overlayClassName={styles.customOverlay}
      ariaHideApp={false} // IMPORTANT: disables React-Modal app element warning
    >
      <div className={styles.modalHeader}>
        <h2 className="font-bold">Create Project</h2>
        {/* <button className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button> */}
      </div>

      <div className={styles.modalBody}>
        <label>Enter Project Name:</label>
        <input
          type="text"
          placeholder="Type Here"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>

      <div className={styles.modalFooter}>
        <button className={styles.cancelButton} onClick={onClose}>
          Cancel
        </button>
        <button className={styles.createButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </Modal>
  );
};

export default Dialog;

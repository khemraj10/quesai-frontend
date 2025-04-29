import { useState } from "react";
import Dialog from "./dialog/Dialog";
import styles from "../styles/CreateProjectButton.module.css";
import { CirclePlus } from "lucide-react";

const CreateProjectButton: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleCreateProject = () => {
    setIsDialogOpen(true);
    console.log("Hi");
  };

  return (
    <div>
      <button
        className={`${styles.createButton}`}
        onClick={handleCreateProject}
      >
        <CirclePlus
          fill="#fff"
          stroke="#000000"
          size={20}
          style={{ marginRight: "4px" }}
        />
        Create New Project
      </button>

      {isDialogOpen && (
        <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      )}
    </div>
  );
};

export default CreateProjectButton;

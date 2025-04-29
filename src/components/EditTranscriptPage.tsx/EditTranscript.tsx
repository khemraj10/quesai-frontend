import React, { useState } from "react";
import styles from "../../styles/EditTranscript.module.css";

interface EditTranscriptProps {
  initialTranscript: string;
  isEditScript: boolean;
}

const EditTranscript: React.FC<EditTranscriptProps> = ({
  initialTranscript,
  isEditScript,
}) => {
  const [transcript, setTranscript] = useState(initialTranscript);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranscript(event.target.value);
  };

  return (
    <div className={styles.editTranscript}>
      <div className={styles.transcriptContainer}>
        <label htmlFor="transcript">Speaker</label>
        <textarea
          id="transcript"
          value={transcript}
          onChange={handleChange}
          rows={10}
          className={styles.transcriptTextarea}
          disabled={!isEditScript}
        />
      </div>
    </div>
  );
};

export default EditTranscript;

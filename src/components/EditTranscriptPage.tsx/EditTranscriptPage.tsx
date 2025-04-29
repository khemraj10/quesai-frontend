// pages/edit-transcript.tsx
import React from "react";
import EditTranscript from "./EditTranscript";

type EditTranscriptPageProps = {
  isEditScript: boolean;
};

const EditTranscriptPage: React.FC<EditTranscriptPageProps> = ({
  isEditScript,
}) => {
  const sampleTranscript = `Sed eu perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam...`;

  return (
    <div className="flex">
      <EditTranscript
        initialTranscript={sampleTranscript}
        isEditScript={isEditScript}
      />
    </div>
  );
};

export default EditTranscriptPage;

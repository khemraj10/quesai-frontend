"use client";

import React, { useState } from "react";
import styles from "../styles/AddPodCast.module.css";
import Sidebar from "./Sidebar";
import FileTable from "./FileTable";
import Breadcrumbs from "./BreadCrumbs";
import { ArrowLeft, Bell, CloudUpload, LogOut } from "lucide-react";
import YoutubeUploadModal from "./dialog/YoutubeUploadDialog";
import EditTranscriptPage from "./EditTranscriptPage.tsx/EditTranscriptPage";
import { useRouter } from "next/navigation";

const files = [
  {
    id: 1,
    name: "THE SIDEPOD S2 EPISODE 15",
    uploadDateTime: "25 Oct 23 | 09:04",
  },
  {
    id: 2,
    name: "THE SIDEPOD S2 EPISODE 17",
    uploadDateTime: "27 Oct 23 | 11:08",
  },
  {
    id: 3,
    name: "THE SIDEPOD S2 EPISODE 20",
    uploadDateTime: "31 Oct 23 | 20:28",
  },
];

const AddPodcast: React.FC = () => {
  const [isYoutubeDialogOpen, setIsYoutubeDialogOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isEditScript, setIsEditScript] = useState(false);
  const router = useRouter();

  const handleAddPodcast = () => {
    setIsYoutubeDialogOpen(true);
  };

  const handleView = (id: number) => {
    setShowDetails(true);
    console.log(`Viewing file with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting file with ID: ${id}`);
  };

  // const handleRSSClick = () => {
  //   console.log("RSS feed clicked");
  // };

  // const handleUploadFilesClick = () => {
  //   console.log("Upload files clicked");
  // };

  const handleBackClick = () => {
    // Redirect to /sampleproject/podcast or previous page
    router.back();
  };

  const handleSave = () => {
    // Logic to save the transcript (e.g., API call)
  };

  const handleDiscard = () => {
    // Logic to save the transcript (e.g., API call)
  };

  return (
    <div className={styles.containerPodcast}>
      <Sidebar />
      <div className="flex flex-col flex-1 p-5">
        <div className="flex justify-between items-center mb-4">
          <Breadcrumbs />
          <div className="flex gap-2">
            <button className="w-6 h-6 rounded-full flex items-center justify-center bg-white hover:bg-gray-200">
              <Bell className="w-3 h-3 text-gray-600" />
            </button>
            <button className="w-6 h-6 rounded-full flex items-center justify-center bg-white hover:bg-gray-200">
              <LogOut className="w-3 h-3 text-red-500" />
            </button>
          </div>
        </div>
        {showDetails ? (
          <div className="flex justify-between items-center mb-5">
            <button
              className="font-bold text-black flex cursor-pointer"
              onClick={handleBackClick}
            >
              <ArrowLeft />
              Edit Transcript
            </button>
            {!isEditScript ? (
              <button
                className="border px-8 rounded-md py-2 text-xs bg-black text-white flex font-bold cursor-pointer"
                onClick={() => setIsEditScript(true)}
              >
                Edit
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleDiscard}
                  className="border px-5 rounded-md py-2 text-xs font-bold border-red-700 text-red-700 flex cursor-pointer"
                >
                  Discard
                </button>

                <button
                  onClick={handleSave}
                  className="border px-8 rounded-md py-2 font-bold text-xs bg-black text-white flex cursor-pointer"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        ) : (
          <h1 className="font-bold text-black mb-5">Add Podcast</h1>
        )}

        {!showDetails ? (
          <>
            <div className={styles.buttonsContainer}>
              <PodcastButton
                title="RSS Feed"
                icon="rss"
                // onClick={handleRSSClick}
              />
              <PodcastButton
                title="Youtube Video"
                icon="youtube"
                onClick={handleAddPodcast}
              />
              <PodcastButton
                title="Upload Files"
                icon="upload"
                // onClick={handleUploadFilesClick}
              />
            </div>

            {files.length > 0 ? (
              <FileTable
                files={files}
                onView={handleView}
                onDelete={handleDelete}
              />
            ) : (
              <div className={styles.uploadSection}>
                <CloudUpload size={48} style={{ color: "#6a1b9a" }} />
                <p>
                  Select a file or drag and drop here (Podcast Media or
                  Transcription Text)
                </p>
                <p className={styles.fileTypes}>
                  MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
                </p>
                <button
                  className={styles.selectFileButton}
                  onClick={handleAddPodcast}
                >
                  Select File
                </button>
              </div>
            )}

            {isYoutubeDialogOpen && (
              <YoutubeUploadModal
                isOpen={isYoutubeDialogOpen}
                onRequestClose={() => setIsYoutubeDialogOpen(false)}
              />
            )}
          </>
        ) : (
          <EditTranscriptPage isEditScript={isEditScript} />
        )}
      </div>
    </div>
  );
};

interface PodcastButtonProps {
  title: string;
  icon: string;
  onClick?: () => void;
}

const PodcastButton: React.FC<PodcastButtonProps> = ({
  title,
  icon,
  onClick,
}) => {
  return (
    <div className={styles.podcastButton} onClick={onClick}>
      <div className="flex flex-col justify-start">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit, unde.</p>
      </div>
      <div className={`${styles.icon} ${styles[icon]}`} />
    </div>
  );
};

export default AddPodcast;

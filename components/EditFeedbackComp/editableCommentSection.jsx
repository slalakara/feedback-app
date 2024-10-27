
"use client";

import { useState } from "react";
import EditFeedbackBtn from "../EditFeedbackBtn/editfeedbackBtn";
import EditModal from "./page";

export default function EditableCommentSection() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  return (
    <div>
      <EditFeedbackBtn onClick={handleEditClick} />
      {isEditModalOpen && <EditModal onCancel={handleCloseModal} />}
    </div>
  );
}

import React from 'react';
import { SubmissionConfirm } from '../SubmissionConfirm';

export interface DeleteConfirmProps {
  triggerTitle: string;
  title: string;
  text?: string;
  deleteText: string;
  cancelText: string;
  onCancel: () => void;
  onDelete: () => void;
  onTriggerClick: () => void;
}

export const DeleteConfirm: React.FC<DeleteConfirmProps> = ({
  triggerTitle,
  title,
  text,
  deleteText,
  cancelText,
  onCancel,
  onDelete,
  onTriggerClick,
}: DeleteConfirmProps) => (
  <SubmissionConfirm
    triggerTitle={triggerTitle}
    onTriggerClick={onTriggerClick}
    title={title}
    text={text}
    submissionText={deleteText}
    cancelText={cancelText}
    confirmButtonColor="red"
    onCancel={onCancel}
    onSubmit={onDelete}
  />
);

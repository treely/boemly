import React from 'react';
import { SubmissionConfirm } from '../SubmissionConfirm';

export interface DeleteConfirmProps {
  trigger: React.JSX.Element;
  title: string;
  text?: string;
  deleteText: string;
  cancelText: string;
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export const DeleteConfirm: React.FC<DeleteConfirmProps> = ({
  trigger,
  title,
  text,
  deleteText,
  cancelText,
  isOpen,
  onCancel,
  onDelete,
}: DeleteConfirmProps) => (
  <SubmissionConfirm
    trigger={trigger}
    title={title}
    text={text}
    submissionText={deleteText}
    cancelText={cancelText}
    confirmButtonColor="red"
    isOpen={isOpen}
    onCancel={onCancel}
    onSubmit={onDelete}
  />
);

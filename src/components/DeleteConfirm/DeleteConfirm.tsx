import React from 'react';
import { SubmissionConfirm } from '../SubmissionConfirm';

export interface DeleteConfirmProps {
  trigger: JSX.Element;
  title: string;
  text?: string;
  deleteText: string;
  cancelText: string;
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
  placement?:
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
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
  placement = 'bottom-start',
}: DeleteConfirmProps) => (
  <SubmissionConfirm
    trigger={trigger}
    title={title}
    placement={placement}
    text={text}
    submissionText={deleteText}
    cancelText={cancelText}
    confirmButtonColor="red"
    isOpen={isOpen}
    onCancel={onCancel}
    onSubmit={onDelete}
  />
);

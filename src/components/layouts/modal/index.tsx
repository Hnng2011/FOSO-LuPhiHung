"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../button";

type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  onYes?: () => void;
  onCancel?: () => void;
  yesLabel?: string;
  cancelLabel?: string;
};

export const CustomModal: React.FC<ModalProps> = ({
  open,
  title,
  description,
  onYes,
  onCancel,
  yesLabel = "Yes",
  cancelLabel = "Cancel",
}) => (
  <Dialog open={open} onOpenChange={onCancel}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && (
          <div className="text-muted-foreground text-sm mt-2">
            {description}
          </div>
        )}
      </DialogHeader>
      <DialogFooter className="flex flex-row justify-end gap-2">
        {onCancel && (
          <Button variant="outline" onClick={onCancel}>
            {cancelLabel}
          </Button>
        )}
        {onYes && (
          <Button variant="destructive" onClick={onYes}>
            {yesLabel}
          </Button>
        )}
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default CustomModal;

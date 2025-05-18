import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import cn from "classnames";
import { ArrowLeft, X } from "lucide-react";
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClickBackButton?: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  hasBackbutton?: boolean;
  closeOnClickOutside?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  description,
  className,
  onClickBackButton,
  hasBackbutton = false,
  showCloseButton = false,
}: ModalProps) => (
  <Dialog.Root open={isOpen}>
    <Dialog.Portal container={document.body}>
      <Dialog.Overlay
        onClick={onClose}
        className="w-full z-40 fixed inset-0 bg-black opacity-80 backdrop-blur-3xl"
      />
      <Dialog.Content
        className={cn(
          className,
          "data-[state=open]:animate-contentShow border border-gray-800 fixed left-[50%] top-[50%] z-40 bg-black   min-w-[500px]  max-w-[90vw] translate-x-[-50%]  translate-y-[-50%] overflow-hidden  rounded-md bg-gray0 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none "
        )}
      >
        <div
          className={`flex gap-8 px-4 py-3 justify-between items-center ${
            title ? "border-b border-gray-800" : ""
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            {hasBackbutton && (
              <button onClick={onClickBackButton}>
                <ArrowLeft size={20} />
              </button>
            )}
            <div className="flex flex-col gap-1">
              {title && (
                <Dialog.Title className="flex items-center gap-4  text-[14px] font-medium">
                  {title}
                </Dialog.Title>
              )}
              {description && (
                <Dialog.Title className="flex items-center gap-4  text-[12px] text-gray-500">
                  {description}
                </Dialog.Title>
              )}
            </div>
          </div>
          {showCloseButton && (
            <Dialog.Close asChild onClick={onClose} className="cursor-pointer">
              <X size={20} />
            </Dialog.Close>
          )}
        </div>
        <Dialog.Description>
          <div
            className={cn([`min-h-[20px] p-4 overflow-y-auto scrollbar-none `])}
          >
            {children}
          </div>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;

// Modal.tsx
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="rounded-xl h-fit max-h-[80%] w-[80%] max-w-[800px] p-6"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-red-500 text-3xl font-bold cursor-pointer"
        >
          &times;
        </button>

        {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}

        <div className="w-full h-full flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

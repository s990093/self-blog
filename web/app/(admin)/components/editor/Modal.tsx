"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (url: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative text-white">
        <button
          className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center"
          onClick={onClose}
        >
          <AiOutlineClose size={24} /> {/* Use the icon here */}
        </button>
        <h2 className="text-lg font-bold mb-4">Enter Image URL</h2>
        <input
          type="text"
          className="border border-gray-600 rounded p-2 w-full bg-gray-700 text-white placeholder-gray-400"
          placeholder="Image URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          onClick={() => {
            onSubmit(inputValue);
            setInputValue(""); // Reset input value
            onClose(); // Close the modal
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;

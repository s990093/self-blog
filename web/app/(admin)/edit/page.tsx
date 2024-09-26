"use client";

import React, { useState } from "react";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import axios from "axios";
import { getApiUrl } from "@/app/Utils/api";
import { useAppContext } from "@/app/Context/AppContext";
import { TYPE_CHOICES } from "./TYPE_CHOICES";

const MarkdownEditor = () => {
  const { addNotification } = useAppContext();
  const [title, setTitle] = useState<string>(""); // State for title
  const [photo, setPhoto] = useState<File | null>(null); // State for photo
  const [text, setText] = useState<string>(""); // State for markdown text
  const [type, setType] = useState<string>(""); // State for type selection

  // Function to handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setPhoto(file);
    }
  };

  const handleSubmit = async () => {
    if (!title || !type || !photo) {
      addNotification("Please fill out all fields and upload an image.");
      return;
    }

    // Create a FormData object to handle file upload and text data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("photo", photo); // The uploaded photo
    formData.append("md_content", text);
    formData.append("type", type);
    try {
      // Send data to the backend using Axios
      await axios.post(getApiUrl("cal/posts/"), formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data for file upload
        },
      });

      // console.log("Upload success:", response.data);
      addNotification("Data uploaded successfully!");
      flushData();
      // alert("Data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading data:", error);
      // alert("Error uploading data");
      addNotification(`Error uploading data ${String(error)}`);
    }
  };

  const flushData = () => {
    setTitle("");
    setPhoto(null);
    setText("");
    setType("");
  };
  return (
    <div className="flex flex-col justify-center items-center p-8 min-h-screen bg-gradient-to-r from-blue-200 to-blue-500 text-black">
      <h1 className="text-3xl font-semibold text-white mb-4">
        Markdown Editor
      </h1>

      <div className="bg-white rounded-lg shadow-lg w-full p-6">
        <div className="flex flex-wrap items-center gap-4 p-2">
          {/* Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
            className="w-full md:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-200 max-w-[300px]"
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full md:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-200 max-w-[300px]"
          />

          {/* Markdown Type Selection */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full md:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-200 max-w-[300px]"
          >
            <option value="">Select Type</option>
            {TYPE_CHOICES.map((choice) => (
              <option key={choice.value} value={choice.value}>
                {choice.label}
              </option>
            ))}
          </select>
        </div>

        {/* Markdown Editor */}
        <div>
          <MdEditor
            modelValue={text}
            onChange={setText}
            language="en-US"
            // onUploadImg={onUploadImg}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="absolute top-0 right-48 bg-blue-600 text-white rounded-b-lg px-4 py-2 shadow-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;

"use client";
import React, { useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const [inputValue, setInputValue] = useState("introduce yourself!");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [projects, setProjects] = useState<
    { id: number; title: string; description: string }[]
  >([]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/upload-avatar",
        formData
      );
      setMessage("File uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      setMessage("Error uploading file.");
      console.error(error);
    }
  };

  const handleAddBox = () => {
    const newProjectId = projects.length + 1;
    const newProject = {
      id: newProjectId,
      title: `個人專案 ${newProjectId}`,
      description: "",
    };

    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  const handleTitleChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, title: event.target.value } : project
    );
    setProjects(updatedProjects);
  };

  const handleDescriptionChange = (
    id: number,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedProjects = projects.map((project) =>
      project.id === id
        ? { ...project, description: event.target.value }
        : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="bg-navyBlue min-h-screen text-babyBlue p-10">
      <h1 className="text-5xl font-bold text-center mb-8">頁面更改</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-blueGrotto p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-semibold mb-0">blog標題:</h2>
            <input
              type="text"
              className="flex-grow p-2 rounded border border-custom-gray text-textColor"
              placeholder="blog標題"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-8">
        <div className="bg-blueGrotto p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">個人檔案</h2>

          <div className="flex items-center space-x-4">
            <span className="text-xl font-semibold mb-4">大頭貼:</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="block mb-4"
            />
          </div>

          {/* 显示消息 */}
          {message && <p className="mt-4 text-white">{message}</p>}

          {/* 多行文本输入框 */}
          <textarea
            value={inputValue}
            onChange={handleChange}
            className="w-full h-40 rounded border border-custom-gray resize-none text-textColor p-2"
            rows={10}
          />
        </div>

        {/* 新增按钮 */}
        <button
          onClick={handleAddBox}
          className="w-32 mt-10 bg-blueGreen text-white py-2 rounded"
        >
          新增個人專案
        </button>

        {/* 动态渲染项目 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-blueGreen p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              {/* 项目标题输入框 */}
              <input
                type="text"
                value={project.title}
                onChange={(e) => handleTitleChange(project.id, e)}
                className="w-full mb-4 p-2 rounded border border-custom-gray"
                placeholder="輸入專案標題"
              />

              {/* 项目描述输入框 */}
              <textarea
                value={project.description}
                onChange={(e) => handleDescriptionChange(project.id, e)}
                className="w-full h-40 rounded border border-custom-gray resize-none text-textColor p-2"
                rows={5}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => console.log(inputValue)}
            className="mt-4 bg-blueGreen text-white py-2 rounded w-48"
          >
            更新
          </button>
        </div>
      </div>
    </div>
  );
}

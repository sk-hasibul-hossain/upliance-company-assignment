import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

const TextEditor = () => {
  // return (
  //   <div className="text-editor-container">
  //     <div className="text-area-text-format">
  //       <span>B</span>
  //       <span>I</span>
  //       <span>U</span>
  //     </div>
  //     <div className="text-area-container">
  //       <textarea></textarea>
  //     </div>
  //     <button>Save</button>
  //   </div>
  // );
  const [editorContent, setEditorContent] = useState("");

  // Handler for editor content change
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const saveContent = () => {
    localStorage.setItem("editorContent", editorContent);
  };

  const loadContent = () => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  };

  return (
    <div className="text-editor-container">
      <div className="text-editor-body">
        <ReactQuill
          className="text-editor"
          theme="snow"
          value={editorContent}
          onChange={handleEditorChange}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
            ],
          }}
        />
      </div>
      <div className="text-editor-footer">
        <button onClick={saveContent}>Save</button>
        <button onClick={loadContent}>Load</button>
      </div>
    </div>
  );
};

export default TextEditor;

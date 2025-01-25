import React, { useState } from 'react';

const ContentEditor = ({ content, onSave }) => {
  const [editedContent, setEditedContent] = useState(content);

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleSave = () => {
    onSave(editedContent);
  };

  return (
    <div>
      <textarea value={editedContent} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ContentEditor;

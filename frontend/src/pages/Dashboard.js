import React, { useState } from 'react';
import axios from 'axios';
import ContentEditor from '../components/ContentEditor';
import ToneSelector from '../components/ToneSelector';
import StyleSelector from '../components/StyleSelector';
import GeneratedContentDisplay from '../components/GeneratedContentDisplay';

const Dashboard = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('formal');
  const [style, setStyle] = useState('informative');
  const [generatedContent, setGeneratedContent] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('/api/content/generate', { topic, tone, style });
      setGeneratedContent(response.data.content);
      setEditedContent(response.data.content);
    } catch (error) {
      console.error('Content generation failed:', error);
    }
  };

  const handleSave = (content) => {
    setEditedContent(content);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        placeholder="Enter topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <ToneSelector tone={tone} onToneChange={setTone} />
      <StyleSelector style={style} onStyleChange={setStyle} />
      <button onClick={handleGenerate}>Generate Content</button>
      {generatedContent && (
        <GeneratedContentDisplay content={generatedContent} />
      )}
      {editedContent && (
        <ContentEditor content={editedContent} onSave={handleSave} />
      )}
    </div>
  );
};

export default Dashboard;

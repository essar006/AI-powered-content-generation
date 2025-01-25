import React from 'react';

const ToneSelector = ({ tone, onToneChange }) => {
  const tones = ['Formal', 'Informal', 'Humorous'];

  return (
    <div>
      <label>Select Tone:</label>
      <select value={tone} onChange={(e) => onToneChange(e.target.value)}>
        {tones.map((t) => (
          <option key={t} value={t.toLowerCase()}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ToneSelector;

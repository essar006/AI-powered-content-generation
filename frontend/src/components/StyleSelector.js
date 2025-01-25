import React from 'react';

const StyleSelector = ({ style, onStyleChange }) => {
  const styles = ['Persuasive', 'Informative'];

  return (
    <div>
      <label>Select Style:</label>
      <select value={style} onChange={(e) => onStyleChange(e.target.value)}>
        {styles.map((s) => (
          <option key={s} value={s.toLowerCase()}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StyleSelector;

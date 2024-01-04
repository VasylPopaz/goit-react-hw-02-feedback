import React from 'react';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ul>
      {options.map(elem => {
        return (
          <li key={elem}>
            <button type="button" onClick={() => onClick(elem)}>
              {elem}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

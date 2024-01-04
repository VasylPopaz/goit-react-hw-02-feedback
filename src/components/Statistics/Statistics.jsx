import React from 'react';

export const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        {options.map(([key, value]) => {
          return (
            <li key={key}>
              <p>
                {key} :<span> {value}</span>
              </p>
            </li>
          );
        })}
      </ul>

      <ul>
        <li>
          <p>
            Total: <span>{total}</span>
          </p>
        </li>
        <li>
          <p>
            Positive feedback: <span>{positivePercentage}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

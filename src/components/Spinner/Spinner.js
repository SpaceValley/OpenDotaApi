import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
      <div className="loader">
          <h1 className="text-white">Loading...</h1>
          <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  );
};

export default Spinner;

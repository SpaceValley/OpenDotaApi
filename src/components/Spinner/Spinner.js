import React from 'react';

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

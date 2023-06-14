import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader = () => (
  <div className="loader-container">
    <Audio
      height={80}
      width={80}
      radius={9}
      color="green"
      ariaLabel="three-dots-loading"
  
    />
  </div>
);

export default Loader;
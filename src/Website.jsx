import React from 'react';
import Navbar from './navbar';
import Build from './build';

const Website = () => {
  return (
    <div >
      <nav>
        <Navbar />
      </nav>
      <Build className="relative z-10" />
    </div>
  );
};

export default Website;

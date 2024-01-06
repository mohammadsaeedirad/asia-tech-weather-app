import React from "react";

const Loading = () => {
  return (
    <div className='vh-100 d-flex bg-gray justify-content-center align-items-center'>
      <div className='spinner-border text-info ' role='status'>
        <span className='visually-hidden'>loading ...</span>
      </div>
    </div>
  );
};

export default Loading;

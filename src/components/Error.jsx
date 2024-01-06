import React from "react";

const Error = ({ error }) => {
  return (
    <div className='col-6'>
      <p className='text-danger text-md text-center my-4'>{error}- خطا</p>
    </div>
  );
};

export default Error;

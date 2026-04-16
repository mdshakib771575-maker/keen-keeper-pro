import React from 'react';

const loading = () => {
    return (
        <div className='text-5xl flex justify-center items-center mt-10 h-screen'>
          <span className="loading loading-spinner loading-xl text-success"></span>
        </div>
    );
};

export default loading;
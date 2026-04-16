import InstallContextProvider from '@/context/InstallContext';
import React from 'react';

const Providers = ({children}) => {
    return (
      <InstallContextProvider>
        {children}
      </InstallContextProvider>
    );
};

export default Providers;
"use client"
import React, { createContext, useState } from 'react';
export const FriendContext = createContext();
const InstallContextProvider = ({ children }) => {
  const [instalFriend, setInstalFriend] = useState([]);

  const data = {
    instalFriend,
    setInstalFriend,
  }
  return (
    <FriendContext.Provider value={data}>
      {children}
    </FriendContext.Provider>
  );
};
export default InstallContextProvider;
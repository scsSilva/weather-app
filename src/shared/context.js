import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState({});

  return (
    <Context.Provider
      value={{
        location,
        setLocation,
      }}
    >
      { children }
    </Context.Provider>
  )
}
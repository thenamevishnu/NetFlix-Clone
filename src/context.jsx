import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    console.log(children);
  const [opened, setOpened] = useState(false);

  return (
    <AppContext.Provider value={[opened, setOpened]}>
      {children}
    </AppContext.Provider>
  );
};

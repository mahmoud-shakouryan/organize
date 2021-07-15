import { createContext, useContext, useState } from "react";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState('INBOX');   //provider tooye toplevel gharar migire o ma az oon consume mikonim7
  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => {
  return useContext(SelectedProjectContext);
};

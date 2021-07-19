import { createContext, useContext, useState } from "react";

export const SelectedProjectContext = createContext();             //1

export const SelectedProjectProvider = ({ children }) => {          //2
  const [selectedProject, setSelectedProject] = useState('INBOX');   //provider tooye toplevel gharar migire o ma az oon consume mikonim.
  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => {        //3
  return useContext(SelectedProjectContext);
};

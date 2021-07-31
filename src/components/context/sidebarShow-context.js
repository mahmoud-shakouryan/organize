import { createContext, useContext, useState } from "react";

export const SidebarShowContext = createContext();             //1



export const SidebarShowProvider = ({ children }) => {         
    const [sidebarShow, setSidebarShow] = useState(false);   
    return (
      <SidebarShowContext.Provider
        value={{ sidebarShow, setSidebarShow }}
      >
        {children}
      </SidebarShowContext.Provider>
    );
  };

  export const useSidebarShowValue = () => {        //3
    return useContext(SidebarShowContext);
  };
  
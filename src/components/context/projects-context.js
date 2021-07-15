import { createContext, useContext } from 'react';
import { useProjects } from '../hooks/index';


export const projectsContext = createContext();
export const projectsProvider = ({ children }) => {            //provider tooye toplevel gharar migire o ma az oon consume mikonim

        const { projects, setProjects } =  useProjects();

        return (
            <projectsContext.Provider value={{ projects, setProjects }}>
                {children}
            </projectsContext.Provider>
        );
}

export const useProjectsValue = () => {
    return useContext(projectsContext);
}


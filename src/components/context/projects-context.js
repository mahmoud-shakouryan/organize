import { createContext, useContext } from 'react';
import { useProjects } from '../hooks/index';


export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {            //provider tooye toplevel gharar migire o ma az oon consume mikonim
    const { projects, setProjects } =  useProjects();          //in be ma az firebase projects ro mide hamin.(fek nakonam add kardane project.)          //niga in khat ro tooye provider neveshte.dar soorati ke mishe biroonesh ham nevesht.vali dige cho tooye provider nist .ma hame ja be projects va setProjects access nadarim.
        return (
            <ProjectsContext.Provider value={{ projects, setProjects }}>
                {children}
            </ProjectsContext.Provider>
        );
}

export const useProjectsValue = () => {                       //darvaghe har ja too comp ha neveshtim useProjectValue() >>> majmooe'ye project ha ro az firebase darim.
    return useContext(ProjectsContext);
}


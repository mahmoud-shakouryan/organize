import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider, LoadingContextProvider, SidebarShowProvider} from './components/context';
import { useState } from 'react';


const App = () => {
  const [darkMode, setDarkMode] = useState(false) ;

  return (
    <SelectedProjectProvider>
    <ProjectsProvider>
    <LoadingContextProvider>
     <SidebarShowProvider>
      
    <main className={darkMode ? 'darkMode' :undefined}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Content/>
    </main>

    </SidebarShowProvider> 
    </LoadingContextProvider>
    </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;

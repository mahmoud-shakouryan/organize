import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider, LoadingContextProvider} from './components/context';
import { useState } from 'react';


const App = () => {
  const [darkMode, setDarkMode] = useState(false) ;

  return (
    <SelectedProjectProvider>
    <ProjectsProvider>
    <LoadingContextProvider>
      
    <main className={darkMode ? 'darkMode' :undefined}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Content/>
    </main>

    </LoadingContextProvider>
    </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;

import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectsProvider, SelectedProjectsProvider } from './components/hooks/index';
import { useState } from 'react';


const App = ({ darlModeDefault= false}) => {

   const [darkMode, setDarkMode] = useState([darlModeDefault]) ;


  return (
    <SelectedProjectsProvider>
    <ProjectsProvider>
    <main className={darkMode ? 'darkmode' : undefined}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Content/>
    </main>
    </ProjectsProvider>
    </SelectedProjectsProvider>
  );
}

export default App;

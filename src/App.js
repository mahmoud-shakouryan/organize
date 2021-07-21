import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './components/context';
import { useState } from 'react';


const App = () => {
  console.log('App');
   const [darkMode, setDarkMode] = useState(false) ;


  return (
    <SelectedProjectProvider>
    <ProjectsProvider>
    
    <main className={darkMode ? 'darkmode' : undefined}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Content/>
    </main>
    
    </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;

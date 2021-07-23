import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider, useDeleteModalValue } from './components/context';
import { useState } from 'react';


const App = () => {
  console.log('rendering App.js')
   const [darkMode, setDarkMode] = useState(false) ;
  const { deleteModal } = useDeleteModalValue();

  return (
    <SelectedProjectProvider>
    <ProjectsProvider>

    <main className={darkMode && deleteModal ? 'darkMode deleteModal' : deleteModal ? 'deleteModal' : undefined}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Content/>
    </main>
    
    </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;

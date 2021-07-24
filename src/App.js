import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider, useDeleteModalValue } from './components/context';
import { useState } from 'react';


const App = () => {
  const [darkMode, setDarkMode] = useState(false) ;
  const { deleteModal } = useDeleteModalValue();
  console.log('rendering App.js',deleteModal)

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

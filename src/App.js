import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { projectsProvider, SelectedProjectProvider } from './components/context';
import { useState } from 'react';


const App = ({ darlModeDefault= false}) => {

   const [darkMode, setDarkMode] = useState([darlModeDefault]) ;


  return (
    <SelectedProjectProvider>
    <projectsProvider>
    <main className={darkMode ? 'darkmode' : undefined}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Content/>
    </main>
    </projectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;

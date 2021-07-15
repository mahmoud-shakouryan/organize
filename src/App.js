import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { ProjectsProvider, SelectedProjectsProvider } from './components/hooks/index';


const App = () => {
  return (
    <SelectedProjectsProvider>
    <ProjectsProvider>
    <div className="App">
      <Header/>
      <Content/>
    </div>
    </ProjectsProvider>
    </SelectedProjectsProvider>
  );
}

export default App;

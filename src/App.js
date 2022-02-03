import "./App.css";
import Projects from "./components/Projects/Projects";
import ProjectsSelector from "./components/ProjectsSelector/ProjectsSelector";


function App() {

  return (
    <div>
      <ProjectsSelector />
      <Projects />
    </div>
  );
}

export default App;

import "./App.css";
import Example from "./components/Example/Example";
import Projects from "./components/Projects/Projects";
import ProjectsSelector from "./components/Projects/ProjectsSelector";


function App() {

  return (
    <div>
      <Example />
      <ProjectsSelector />
      <Projects />
    </div>
  );
}

export default App;

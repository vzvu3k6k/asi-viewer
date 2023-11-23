import { StrictMode } from "react";
import { Editor } from "./components/Editor";
import "./userWorker";
import "./App.css";

function App() {
  return (
    <StrictMode>
      <Editor />
    </StrictMode>
  );
}

export default App;

import { StrictMode } from "react";
import { Editor } from "./components/Editor";
import "./userWorker";

function App() {
  return (
    <StrictMode>
      <h1>ASI Viewer</h1>
      <Editor />
    </StrictMode>
  );
}

export default App;

import { StrictMode } from "react";
import { Editor } from "./components/Editor";
import "./userWorker";

function App() {
  return (
    <StrictMode>
      <Editor />
    </StrictMode>
  );
}

export default App;

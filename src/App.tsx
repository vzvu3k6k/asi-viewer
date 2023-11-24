import { StrictMode } from "react";
import { Editor } from "./components/Editor";
import "./userWorker";
import styles from "./App.module.css";

function App() {
  return (
    <StrictMode>
      <div className={styles.container}>
        <h1>ASI Viewer</h1>
        <div className={styles.editorContainer}>
          <Editor />
        </div>
      </div>
    </StrictMode>
  );
}

export default App;

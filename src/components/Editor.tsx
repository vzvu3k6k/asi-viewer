import { FC, useRef, useState, useEffect } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import styles from "./Editor.module.css";
import { getHints } from "../lib/getHints";

const defaultValue = `
const f = (a, b) => a + b;

const result = f(2, 5);
`;

const registerInlayHintsProvider = () => {
  monaco.languages.registerInlayHintsProvider("javascript", {
    provideInlayHints(model) {
      return {
        hints: getHints(model.getValue()),
        dispose: () => {},
      };
    },
  });
};

export const Editor: FC = () => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEditor((currentEditor) => {
      if (currentEditor) return currentEditor;
      if (!monacoEl.current) return null;

      const editor = monaco.editor.create(monacoEl.current, {
        value: defaultValue,
        language: "javascript",
      });
      registerInlayHintsProvider();
      return editor;
    });

    return () => editor?.dispose();
  }, [editor]);

  return <div className={styles.Editor} ref={monacoEl}></div>;
};

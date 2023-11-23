import { FC, useRef, useState, useEffect } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import styles from "./Editor.module.css";

const defaultValue = `const f = (a, b) => a + b;

const result = f(2, 5);
`;

export const Editor: FC = () => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEditor((editor) => {
      if (editor) return editor;
      if (!monacoEl.current) return null;

      return monaco.editor.create(monacoEl.current, {
        value: defaultValue,
        language: "javascript",
      });
    });

    return () => editor?.dispose();
  }, [editor]);

  return <div className={styles.Editor} ref={monacoEl}></div>;
};

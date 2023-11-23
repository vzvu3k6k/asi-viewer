import { parse } from "acorn";
import * as monaco from "monaco-editor";

export const getHints = (code: string): monaco.languages.InlayHint[] => {
  const hints: monaco.languages.InlayHint[] = [];
  try {
    parse(code, {
      ecmaVersion: "latest",
      onInsertedSemicolon(_, lastTokEndLoc) {
        if (!lastTokEndLoc) return;
        hints.push({
          kind: monaco.languages.InlayHintKind.Type,
          position: {
            column: lastTokEndLoc.column + 1,
            lineNumber: lastTokEndLoc.line,
          },
          label: `/* ; */`,
        });
      },
      locations: true,
    });
  } catch (e) {
    console.log("parse error", e);
  }
  return hints;
};

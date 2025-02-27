import styles from "./CodeEditor.module.css";
import { useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, lineNumbers } from "@codemirror/view";
import { keymap } from "@codemirror/view";
import { oneDark } from "@codemirror/theme-one-dark";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { autocompletion, closeBrackets } from "@codemirror/autocomplete";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import PenNav from "../PenNav/PenNav";

const CodeEditor = () => {

  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);
  const iframeRef = useRef(null);

  const htmlEditorRef = useRef(null);
  const cssEditorRef = useRef(null);
  const jsEditorRef = useRef(null);

  const [htmlCode, setHtmlCode] = useState("<h1>Hello</h1>");
  const [cssCode, setCssCode] = useState("/* Write CSS here */");
  const [jsCode, setJsCode] = useState("// Write JavaScript here");

  useEffect(() => {
    if (!htmlRef.current || !cssRef.current || !jsRef.current) return;

    const createEditor = (parent, lang, content, setCode, editorRef) => {
      if (editorRef.current) return; 

      parent.style.height = "200px";
      parent.style.minHeight = "200px";

      const state = EditorState.create({
        doc: content,
        extensions: [
          lang,
          lineNumbers(),
          autocompletion(),
          keymap.of([indentWithTab, ...defaultKeymap]),
          oneDark,
          closeBrackets(),
          EditorView.updateListener.of((update) => {
            if (update.changes) {
              setCode(update.state.doc.toString());
            }
          }),
        ],
      });

      editorRef.current = new EditorView({ state, parent });
    };

    createEditor(htmlRef.current, html(), htmlCode, setHtmlCode, htmlEditorRef);
    createEditor(cssRef.current, css(), cssCode, setCssCode, cssEditorRef);
    createEditor(jsRef.current, javascript(), jsCode, setJsCode, jsEditorRef);
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `);
    doc.close();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <>
      <PenNav />
      <div className={styles.container}>
        <div className={styles.editor}>
          <div className={styles.header}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML"
            />
            <p>HTML</p>
          </div>
          <div ref={htmlRef} className={styles.code}></div>
        </div>
        <div className={styles.editor}>
          <div className={styles.header}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
              alt="CSS"
            />
            <p>CSS</p>
          </div>
          <div ref={cssRef} className={styles.code}></div>
        </div>
        <div className={styles.editor}>
          <div className={styles.header}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript"
            />
            <p>JavaScript</p>
          </div>
          <div ref={jsRef} className={styles.code}></div>
        </div>
        <div className={styles.previewContainer}>
          <iframe ref={iframeRef} className={styles.preview}></iframe>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;

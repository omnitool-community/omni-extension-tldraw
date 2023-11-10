import * as React from "react";
import { Tldraw, TldrawApp } from "@tldraw/tldraw";
import "./styles.css";
import "@tldraw/tldraw/tldraw.css";
import { uiOverrides } from './ui-overrides.ts'
//const uiOverrides = {}
import {OmniSDKClient} from 'omni-sdk';
const sdk = new OmniSDKClient("omni-extension-tldraw").init();


export default function App() {
  const persistenceId = "tldraw-example";

  const handleMount = (app: TldrawApp) => {
    // You can use the app API here! e.g. app.selectAll()
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh"
      }}
    >
      <Tldraw id={persistenceId} onMount={handleMount} 	overrides={uiOverrides} />
    </div>
  );
}

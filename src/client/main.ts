"use client"

//import './css/bootstrap-icons_font_bootstrap-icons.css'
import "@tldraw/tldraw/editor.css";
import * as TLDDraw from '@tldraw/tldraw'

//import * as TDLDraw from "@tldraw/tldraw";
import {OmniSDKClient} from 'omni-sdk';
const sdk = new OmniSDKClient("omni-extension-tldraw").init();

const tldraw = TLDDraw()

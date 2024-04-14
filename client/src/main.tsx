import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
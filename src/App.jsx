import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthErrorCodes } from 'firebase/auth'
import FormsFirebase from "./page/FormsFirebase";
import { AuthProvider } from "./context/AutContext";

function App() {
  return  (
    <AuthProvider>
      <div className="App">
        <h1>Grupo02</h1>
        <FormsFirebase/>
      </div>
    </AuthProvider>
  )
}

export default App

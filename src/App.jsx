import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Information from './components/Information.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'

function App() {

  return (
    <>
      <form>
        <Information />
        <Education />
        <Experience />
      </form>
    </>
  );
};

export default App;

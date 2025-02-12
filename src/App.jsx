import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Information from './components/Information.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'


function Edit({ onEdit }) {
  return (
    <>
      <button
      type = "button"
        onClick={onEdit}>
        Edit
      </button>
    </>
  )
};

function Submit({onSubmit}) {
  return (
    <>
      <button
        type="submit"
        onClick={onSubmit}>
        Submit
      </button>
    </>
  )
};

function App() {
  const [editable, setEditable] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEditable(false);
  };

  const handleEdit = () => {
    setEditable(true);
  };
  return (
    <>
    <h1>CV Application</h1>
      <form onSubmit={handleSubmit}>
        <Information editable={editable} />
        <Education editable={editable} />
        <Experience editable={editable} />
        <Edit onEdit={handleEdit} />
        <Submit onSubmit={handleSubmit}/>
      </form>
    </>
  );
};

export default App;

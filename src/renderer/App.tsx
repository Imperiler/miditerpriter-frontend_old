import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Hello = () => {
  const [file, uploadFile] = useState('');

  const sendFile = async (input) => {
    console.log(input);
    await fetch('http://127.0.0.1:8000').then((res) => console.log(res));
  };

  return (
    <div className="Hello">
      <div className="main-div">
        <h2>Miditerpreter</h2>
        <a
          className="github-button"
          href="https://github.com/mitchellkennedy"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          aria-label="Follow @mitchellkennedy on GitHub"
        >
          Follow @mitchellkennedy
        </a>
        <a
          className="github-button"
          href="https://github.com/Alvis1337"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          aria-label="Follow @Alvis1337 on GitHub"
        >
          Follow @Alvis1337
        </a>
        <a
          className="github-button"
          href="https://github.com/mitchellkennedy/miditerpreter"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star mitchellkennedy/miditerpreter on GitHub"
        >
          Star
        </a>
        <div className="file-upload-form">
          <div className="file-upload-button">
            <Form.Control
              className="file-input-button"
              type="file"
              onChange={(event) => {
                event.preventDefault();
                uploadFile(event.target.files[0]);
              }}
            />
          </div>

          <Button
            className="file-upload-button"
            onClick={(event) => {
              event.preventDefault();
              sendFile(file);
            }}
          >
            Upload!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

declare global {
  interface Window {
    electron: {
      store: {
        get: (key: string) => string;
        set: (key: string, val: string) => void;
      };
    };
  }
}

const Hello = () => {
  const [file, uploadFile] = useState('');

  const notify = () => {
    if (window.electron.store.get('fileUploadStatus')) {
      toast(`File was converted, look in ${file}`);
    } else {
      toast('There was some sort of error.');
    }
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
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                uploadFile(event.target.files[0].path);
              }}
            />
          </div>
          <Button
            className="file-upload-button"
            onClick={(event) => {
              event.preventDefault();
              window.electron.store.set('filePath', '');
              window.electron.store.set('filePath', file);
              notify();
              // eslint-disable-next-line no-console
              console.log(file);
            }}
          >
            Upload!
          </Button>
          <Toaster />
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

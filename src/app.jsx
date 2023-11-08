import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Form from "./components/Form"

const App = () => {
  return (
    <>
      <div className='box-border'>
        <div className="grid form-example">
          <Form />
        </div>
      </div>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

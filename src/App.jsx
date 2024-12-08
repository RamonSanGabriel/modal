import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import { createPortal } from 'react-dom';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = (value) => {
    setShowModal(false);
    setMessage(value);
  };

  return (
    <div>
      {message === '' ? (
        <p>No button was clicked</p>
      ) : (
        <p>
          You clicked the <strong>{message}</strong> button{' '}
        </p>
      )}
      {showModal ? (
        createPortal(
          <Modal
            onClose={handleCloseModal}
            onSubmit={handleCloseModal}
            onCancel={handleCloseModal}
          />,
          document.body
        )
      ) : (
        <button className="show-modal-btn" onClick={handleShowModal}>
          Show Modal
        </button>
      )}
    </div>
  );
}

export default App;

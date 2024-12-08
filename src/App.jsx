import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      {showModal ? (
        <Modal onClose={setShowModal} onSubmit={null} onCancel={null} />
      ) : (
        <button className="show-modal-btn" onClick={handleShowModal}>
          Show Modal
        </button>
      )}
    </div>
  );
}

export default App;

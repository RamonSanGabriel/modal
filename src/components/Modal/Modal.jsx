import css from './Modal.module.css';

const Modal = ({ children }) => {
  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <div className={css.close} onClick={() => alert('close')}>
          <button>&times;</button>{' '}
        </div>
        <h1>This is a modal</h1>
        <p>It shows the functionality of a modal</p>
        <div>
          <button className={css.btnSubmit}>Submit</button>
          <button className={css.btnCancel}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import css from './Modal.module.css';

const Modal = ({ onClose, onSubmit, onCancel, handleCloseModal }) => {
  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <div className={css.close}>
          <p onClick={() => onClose('close')}>&times;</p>{' '}
        </div>
        <h1>This is a modal</h1>
        <p>It shows the functionality of a modal</p>
        <div className={css.footerBtns}>
          <button onClick={() => onSubmit('submit')} className={css.btnSubmit}>
            Submit
          </button>
          <button onClick={() => onCancel('cancel')} className={css.btnCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

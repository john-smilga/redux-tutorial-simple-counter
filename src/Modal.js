import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MODAL_CLOSE } from "./actions";
const Modal = ({ isOpen, name, text, close }) => {
  // const isOpen = true;
  return (
    <div className={`modal-overlay ${isOpen ? `isModalOpen` : null}`}>
      <div className="modal-container">
        <h4>{name}</h4>
        <p>{text}</p>
        <button className="btn btn-primary" onClick={close}>
          close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};
function mapStateToProps({ modalState: { isOpen, name, text } }) {
  return { isOpen, name, text };
}
function mapDispatchToProps(dispatch) {
  return { close: () => dispatch({ type: MODAL_CLOSE }) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);

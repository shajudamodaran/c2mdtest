import React from "react";
import { Modal, Button } from "react-bootstrap";
import Style from "./ConfirmModal.module.scss";
import Assets from "../../Layout/Assets";
function ConfirmModal({
  showModal,
  setShowModal,
  onDelete,
  onCancel,
  deleteItems,
  number,
}) {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        style={{ zIndex: 20000 }}
        className={Style.DeleteConfirmmodal}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div>
            <div>
              {/* <div>
                <img
                  src={Assets.modalClose}
                  alt=""
                  className={Style.modalCloseicon}
                  onClick={() => {
                    setShowModal(false);
                  }}
                />
              </div> */}

              {/* <div>
                <img
                  src={Assets.closeIcon}
                  alt=""
                  className={Style.headerIcon}
                />
              </div> */}

              <h3 className={Style.HeaderText}> Are you sure ?</h3>
            </div>
            <p className={Style.DeleteText}>
              Kindly note that the Reminder number (
              <span style={{ fontWeight: 500, color: "#000" }}> {number} </span>
              ) and Emergency Contact number (
              <span style={{ fontWeight: 500, color: "#000" }}> {number} </span>
              ) are same. Would you like to confirm and proceed ?
            </p>
            <div className={Style.BottomSection}>
              <Button
                variant="primary"
                className={Style.cancelBtn}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className={Style.DeleteBtn}
                onClick={() => onCancel()}
              >
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default ConfirmModal;

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({modal, toggle}) => {
  return (
    <Modal
      isOpen={modal}
      modalTransition={{ timeout: 700 }}
      backdropTransition={{ timeout: 1300 }}
      toggle={toggle}>
      <ModalHeader toggle={toggle}>Add a new Task</ModalHeader>
      <ModalBody>
        <form>
            <div className="form-group">
                <label>Task Title</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Task Description</label>
            <textarea rows='3' className="form-control"></textarea>
            </div>
            <div>
                <label>Due Date</label>
                <input type ="date" className="form-control"/>
            </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Add Task
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;

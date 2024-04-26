import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const SectorFormModal = (props) => {
  let initialFormDataState = { name: "", image: "" };

  const [formData, setFormData] = useState(initialFormDataState);

  // to collect data from inputs and bind it with input change function
  const inputChangeHandler = (fieldName, event) => {
    setFormData((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };
  // to submit the form lifting the state up to servicesList
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
  };
  return (
    <Modal show={props.showModal} onHide={props.hideModal}>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>New Sector</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Sector Name</Form.Label>
                <Form.Control
                  type="text"
                  value={""}
                  onChange={inputChangeHandler.bind(this, "name")}
                  placeholder="Enter Sector Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Sector Image</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="insert Sector Image"
                  value={""}
                  onChange={inputChangeHandler.bind(this, "image")}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </Modal>
  );
};
export default SectorFormModal;

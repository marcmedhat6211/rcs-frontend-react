import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

let initialFormDataState = { name: "", description: "" };

const ServiceFormModal = (props) => {
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
    let serviceId;
    if (props.serviceToBeEdited !== undefined) {
      serviceId = props.serviceToBeEdited.id;
    } else {
      serviceId = undefined;
    }
    props.onSubmit(formData, serviceId);
  };

  // to condition between create and edit service
  useEffect(() => {
    if (props.serviceToBeEdited) {
      setFormData({
        name: props.serviceToBeEdited.name,
        description: props.serviceToBeEdited.description,
      });
    } else {
      setFormData(initialFormDataState);
    }
  }, [props.serviceToBeEdited]);

  return (
    <Modal show={props.showModal} onHide={props.hideModal}>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>New Service</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={formSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Service Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={inputChangeHandler.bind(this, "name")}
                  placeholder="Enter Service Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Service Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Service Description"
                  value={formData.description}
                  onChange={inputChangeHandler.bind(this, "description")}
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
export default ServiceFormModal;

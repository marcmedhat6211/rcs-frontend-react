import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Controller, useForm } from "react-hook-form";

let initialFormDataState = { name: "", description: "" };

const ServiceFormModal = (props) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialFormDataState,
  });
  // const [formData, setFormData] = useState(initialFormDataState);

  // to collect data from inputs and bind it with input change function
  // const inputChangeHandler = (fieldName, event) => {
  //   setFormData((prevState) => {
  //     return { ...prevState, [fieldName]: event.target.value };
  //   });
  // };

  // to submit the form lifting the state up to servicesList
  const formSubmitHandler = (data) => {
    // event.preventDefault();
    let serviceId;
    if (props.serviceToBeEdited !== undefined) {
      serviceId = props.serviceToBeEdited.id;
    } else {
      serviceId = undefined;
    }
    props.onSubmit(data, serviceId, setError);
  };

  // useEffect(() => {
  //   // Example of setting an error for the "name" field
  //   setError("name", { type: "custom", message: "Error on the name field" });
  // }, [setError]);

  // to condition between create and edit service
  useEffect(() => {
    if (props.serviceToBeEdited) {
      // setFormData({
      //   name: props.serviceToBeEdited.name,
      //   description: props.serviceToBeEdited.description,
      // });
      reset(props.serviceToBeEdited);
    } else {
      // setFormData(initialFormDataState);
      reset(initialFormDataState);
    }
  }, [props.serviceToBeEdited, reset]);

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
            <Form onSubmit={handleSubmit(formSubmitHandler)}>
              {/* name */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <Form.Control
                        type="text"
                        placeholder="Enter Service Name"
                        // isInvalid lw true yeb2a hya msh valid
                        // lw false yeb2a hya valid
                        isInvalid={!!errors.name}
                        {...field}
                      />
                    );
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name?.message}
                </Form.Control.Feedback>
              </Form.Group>

              {/* description */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Description</Form.Label>
                <Controller
                  control={control}
                  name="description"
                  render={({ field }) => {
                    return (
                      <Form.Control
                        type="text"
                        placeholder="Enter Description"
                        isInvalid={!!errors.description}
                        {...field}
                      />
                    );
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description?.message}
                </Form.Control.Feedback>
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicName">
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
              </Form.Group> */}

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

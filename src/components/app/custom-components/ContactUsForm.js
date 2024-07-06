import Form from "react-bootstrap/Form";
import Button1 from "../ui/buttons/Button1";
import { Controller, useForm } from "react-hook-form";
import { sendRequest } from "../../../services/api-service";
import { setErrorOnResource } from "../../../helpers/error-helper";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

const ContactUsForm = () => {
  const [submittingForm, setSubmittingForm] = useState(false);

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      business: "",
      text: "",
    },
  });

  const formSubmitHandler = (data) => {
    setSubmittingForm(true);
    sendRequest("contact", "POST", data)
      .then((res) => {
        // lazem at2aked elawel en fee response w b3den at2aked en elresponse.success(gy men elbackend)
        // 3shan law wa2ft 3nd if res bas law b false hayetla3 men el if condition w sa3etha momken yedrab
        // fy else lma acheck 3la el res.errors
        if (res) {
          if (res.success) {
            alert(
              "Our Team has received your message. We'll get back to you soon."
            );
          } else {
            setErrorOnResource(res.errors, setError);
          }
        }
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => setSubmittingForm(false));
  };

  return (
    <Form onSubmit={handleSubmit(formSubmitHandler)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Controller
          control={control}
          name="name"
          render={({ field }) => {
            return (
              <Form.Control
                color="#495057"
                size="lg"
                type="text"
                placeholder="Enter name"
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

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Controller
          control={control}
          name="email"
          render={({ field }) => {
            return (
              <Form.Control
                color="#495057"
                size="lg"
                type="email"
                placeholder="Enter email"
                {...field}
                isInvalid={!!errors.email}
              />
            );
          }}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBusinessName">
        <Controller
          control={control}
          name="business"
          render={({ field }) => {
            return (
              <Form.Control
                color="#495057"
                size="lg"
                type="text"
                placeholder="Enter business name"
                {...field}
                isInvalid={!!errors.business}
              />
            );
          }}
        />
        <Form.Control.Feedback type="invalid">
          {errors.business?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Controller
          control={control}
          name="text"
          render={({ field }) => {
            return (
              <Form.Control
                as="textarea"
                color="#495057"
                size="lg"
                rows={5}
                placeholder="Tell us a bit about your needs so we can get you started"
                {...field}
                isInvalid={!!errors.text}
              />
            );
          }}
        />
        <Form.Control.Feedback type="invalid">
          {errors.text?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button1 type="submit" disabled={submittingForm}>
        {submittingForm ? (
          <Spinner animation="border" variant="dark" size="sm" />
        ) : (
          "Submit"
        )}
      </Button1>
    </Form>
  );
};
export default ContactUsForm;

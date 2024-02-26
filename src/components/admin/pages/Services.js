import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const dummyServices = [
  { id: Math.random(), name: "service 1", desc: "a great service" },
  { id: Math.random(), name: "service 2", desc: "a great service" },
  { id: Math.random(), name: "service 3", desc: "a great service" },
];
const Services = () => {
  return (
    <div>
      <div className="d-flex justify-content-end mb-2">
        <Button variant="success">Create Service</Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyServices.map((service) => {
            return (
              <tr>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td>{service.desc}</td>
                <td>
                  <Button variant="outline-primary" size="sm" className="me-2">
                    {" "}
                    Edit{" "}
                  </Button>
                  <Button variant="outline-danger" size="sm">
                    Delete{" "}
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Services;

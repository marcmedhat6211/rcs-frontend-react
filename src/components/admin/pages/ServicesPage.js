import { useEffect, useMemo, useState } from "react";
import OverviewTable from "../ui/tables/OverviewTable";
import { Button } from "react-bootstrap";
import ServiceFormModal from "../custom-components/service/ServiceFormModal";
import { initialTableFilters } from "../../../constants/filters";
import { sendRequest } from "../../../services/api-service";
import { setErrorOnResource } from "../../../helpers/error-helper";

// const DUMMY_DATA = [
//   {
//     id: 1,
//     name: "service 1",
//     description: "nice service",
//   },
//   {
//     id: 2,
//     name: "service 2",
//     description: "very nice service",
//   },
//   {
//     id: 3,
//     name: "service 3",
//     description: "gamda fash5",
//   },
// ];

const ServicesList = () => {
  // states
  const [showModal, setShowModal] = useState(false);
  const [services, setServices] = useState([]);
  const [serviceToBeEdited, setServiceToBeEdited] = useState();
  const [loadingTableData, setLoadingTableData] = useState(false);
  const [tableFilters, setTableFilters] = useState(initialTableFilters);

  useEffect(() => {
    setLoadingTableData(true);
    sendRequest("service/list", "GET", {}, tableFilters)
      .then((response) => {
        if (response.success) {
          setServices(response.services);
        }
      })
      .finally(() => {
        setLoadingTableData(false);
      });
  }, [tableFilters]);

  const columns = useMemo(() => {
    return ["#", "Name", "Description", "Actions"];
  }, []);

  const createbuttonHandler = () => {
    setServiceToBeEdited(undefined);
    setShowModal(true);
  };

  const editButtonHandler = (service) => {
    setServiceToBeEdited(service);
    setShowModal(true);
  };

  const deleteButtonHandler = (service) => {
    sendRequest(`service/${service.id}/delete`, "DELETE").then((response) => {
      // console.log(response);
      if (response.success) {
        setServices((prevState) => {
          return prevState.filter((item) => {
            return item.id !== service.id;
          });
        });
      }
    });
  };

  const formSubmitHandler = (formData, serviceId, setError) => {
    if (serviceId === undefined) {
      sendRequest("service/create", "POST", formData).then((response) => {
        if (response.success) {
          setServices((prevState) => {
            return [...prevState, response.service];
          });
          setShowModal(false);
        } else {
          setErrorOnResource(response.errors, setError);
        }
      });
    } else {
      sendRequest(`service/${serviceId}/update`, "PATCH", formData).then(
        (response) => {
          if (response.success) {
            setServiceToBeEdited(response.data);
          }
        }
      );
      setShowModal(false);
    }
  };

  const mappedTableData = services.map((service) => {
    return {
      key: Math.random(),
      // array of cells
      itemData: [
        // cell
        {
          key: Math.random(),
          itemFeature: <div>{service.id}</div>,
          widthInPercentage: 20,
        },
        {
          key: Math.random(),
          itemFeature: <div>{service.name}</div>,
          widthInPercentage: 40,
        },
        {
          key: Math.random(),
          itemFeature: <div>{service.description}</div>,
          widthInPercentage: 40,
        },
        {
          key: Math.random(),
          itemFeature: (
            <div>
              <Button
                variant="outline-primary"
                size="sm"
                className="me-2"
                onClick={editButtonHandler.bind(this, service)}
              >
                {" "}
                Edit{" "}
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={deleteButtonHandler.bind(this, service)}
              >
                Delete{" "}
              </Button>
            </div>
          ),
          widthInPercentage: 40,
        },
      ],
    };
  });

  return (
    // <div>
    //   <div className="d-flex justify-content-end mb-2">
    //     <Button variant="success">Create Service</Button>
    //   </div>
    //   <Table striped bordered hover responsive>
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Name</th>
    //         <th>Description</th>
    //         <th>Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {dummyServices.map((service) => {
    //         return (
    //           <tr>
    //             <td>{service.id}</td>
    //             <td>{service.name}</td>
    //             <td>{service.desc}</td>
    //             <td>
    //               <Button variant="outline-primary" size="sm" className="me-2">
    //                 {" "}
    //                 Edit{" "}
    //               </Button>
    //               <Button variant="outline-danger" size="sm">
    //                 Delete{" "}
    //               </Button>
    //             </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </Table>
    // </div>
    <>
      <OverviewTable
        columns={columns}
        tableData={mappedTableData}
        onAddResourceClick={createbuttonHandler}
        setTableFilters={setTableFilters}
        addResourceBtnName={"Add Service"}
        loadingTableData={loadingTableData}
      />
      <ServiceFormModal
        showModal={showModal}
        serviceToBeEdited={serviceToBeEdited}
        onSubmit={formSubmitHandler}
        hideModal={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};
export default ServicesList;

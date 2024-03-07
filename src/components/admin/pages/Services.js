// import { Button } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
import { useMemo } from "react";
import OverviewTable from "../ui/tables/OverviewTable";
import { Button } from "react-bootstrap";

const DUMMY_DATA = [
  {
    id: 1,
    name: "service 1",
    description: "nice service",
  },
  {
    id: 2,
    name: "service 2",
    description: "very nice service",
  },
  {
    id: 3,
    name: "service 3",
    description: "gamda fash5",
  },
];

const Services = () => {
  const columns = useMemo(() => {
    return ["#", "Name", "Description", "Actions"];
  }, []);

  const mappedTableData = DUMMY_DATA.map((service) => {
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
              <Button variant="outline-primary" size="sm" className="me-2">
                {" "}
                Edit{" "}
              </Button>
              <Button variant="outline-danger" size="sm">
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
    <OverviewTable columns={columns} tableData={mappedTableData} />
  );
};
export default Services;

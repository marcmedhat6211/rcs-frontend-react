import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

// let summedItemFeatures = tableData[0].itemData.length

// array of rows:
// const tableData = [
//   // row:
//   {
//     key: Math.random(),
//     // array of cells
//     itemData: [
//       // cell
//       {
//         key: Math.random(),
//         itemFeature: <div>1</div>,
//         widthInPercentage: 20,
//       },
//       {
//         key: Math.random(),
//         itemFeature: <div>Service 1</div>,
//         widthInPercentage: 40,
//       },
//       {
//         key: Math.random(),
//         itemFeature: <div>nice service</div>,
//         widthInPercentage: 40,
//       },
//       {
//         key: Math.random(),
//         itemFeature: (
//           <div>
//             <Button variant="outline-primary" size="sm" className="me-2">
//               {" "}
//               Edit{" "}
//             </Button>
//             <Button variant="outline-danger" size="sm">
//               Delete{" "}
//             </Button>
//           </div>
//         ),
//         widthInPercentage: 40,
//       },
//     ],
//   },
//   {
//     key: Math.random(),
//     // array of cells
//     itemData: [
//       // cell
//       {
//         key: Math.random(),
//         itemFeature: <div></div>,
//         widthInPercentage: 20,
//       },
//       {
//         key: Math.random(),
//         itemFeature: <div></div>,
//         widthInPercentage: 40,
//       },
//       {
//         key: Math.random(),
//         itemFeature: <div></div>,
//         widthInPercentage: 40,
//       },
//     ],
//   },
// ];

const OverviewTable = ({ columns, tableData }) => {
  const renderTableData = () => {
    return tableData.map((rowObj) => {
      return (
        <tr key={rowObj.key}>
          {rowObj.itemData.map((cellObj) => {
            return <td key={cellObj.key}>{cellObj.itemFeature}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-2">
        <Button variant="success">Create Service</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={Math.random()}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
    </div>
  );
};

export default OverviewTable;

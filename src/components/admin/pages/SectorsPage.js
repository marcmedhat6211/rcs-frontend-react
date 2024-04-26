import { useEffect, useMemo, useState } from "react";
import SectorFormModal from "../custom-components/sector/SectorFormModal";
import OverviewTable from "../ui/tables/OverviewTable";
import { Button } from "react-bootstrap";

const SectorsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [sectors, setSectors] = useState([]);
  const [sectorToBeEdited, setSectorToBeEdited] = useState();
  const columns = useMemo(() => {
    return ["#", "Name", "Image", "Actions"];
  }, []);

  const createbuttonHandler = () => {
    setSectorToBeEdited(undefined);
    setShowModal(true);
  };

  const editButtonHandler = (sector) => {
    setSectorToBeEdited(sector);
    setShowModal(true);
  };
  const deleteButtonHandler = (sector) => {
    setSectors((prevState) => {
      return prevState.filter((item) => {
        return item.id !== sector.id;
      });
    });
    setShowModal(false);
  };
  const formSubmitHandler = (formData) => {
    setSectors((prevState) => {
      return [
        ...prevState,
        { ...formData, id: prevState[prevState.length - 1].id + 1 },
      ];
    });
  };

  const mappedTableData = sectors.map((sector) => {
    return {
      key: Math.random(),
      // array of cells
      itemData: [
        // cell
        {
          key: Math.random(),
          itemFeature: <div>{sector.id}</div>,
          widthInPercentage: 20,
        },
        {
          key: Math.random(),
          itemFeature: <div>{sector.name}</div>,
          widthInPercentage: 40,
        },
        {
          key: Math.random(),
          itemFeature: <div>{sector.image}</div>,
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
                onClick={editButtonHandler.bind(this, sector)}
              >
                {" "}
                Edit{" "}
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={deleteButtonHandler.bind(this, sector)}
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
    <>
      <OverviewTable
        columns={columns}
        tableData={mappedTableData}
        onAddResourceClick={createbuttonHandler}
        addResourceBtnName={"Add Sector"}
      />
      <SectorFormModal
        showModal={showModal}
        sectorToBeEdited={sectorToBeEdited}
        onSubmit={formSubmitHandler}
        hideModal={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};
export default SectorsPage;

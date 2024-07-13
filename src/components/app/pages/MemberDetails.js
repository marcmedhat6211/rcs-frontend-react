import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { sendRequest } from "../../../services/api-service";
import styles from "./MemberDetails.module.scss";

// const memberDetails = [
//   {
//     id: Math.random(),
//     key: Math.random(),
//     name: "Peter",
//     position: "Manager",
//     certif: "CMC,PHD,PHP",
//     photo: "https://reliancecompliance.ca/images/team/headshot_13.jpg?v=1.0.1",
//     description: "A,FJKAFHKJHFKEJHFELHFKJHE;FWENWKLNXE;NWlk;clkncklencN;WKJC;",
//   },
//   {
//     id: Math.random(),
//     key: Math.random(),
//     name: "MIch",
//     position: "employee",
//     certif: "CMC,PHD,PHP",
//     photo: "https://reliancecompliance.ca/images/team/headshot_13.jpg?v=1.0.1",
//     description: "A,FJKAFHKJHFKEJHFEXE;NWlk;clkncklencN;WKJC;",
//   },
// ];

const MemberDetails = () => {
  const params = useParams();

  // states
  //TODO: uncomment this code
  // const [memberDetails, setMemberDetails] = useState();
  const [loadingTeamMember, setLoadingTeamMember] = useState(false);

  // remove this code (just for testing)
  const memberDetails = {
    id: Math.random(),
    key: Math.random(),
    name: "Peter Morcos",
    position: "employee",
    // certificates: "CMC,PHD,PHP",
    certificates: ["CMC", "PHP", "AY7AGA"],
    photo: "https://reliancecompliance.ca/images/team/headshot_13.jpg?v=1.0.1",
    description: "A,FJKAFHKJHFKEJHFEXE;NWlk;clkncklencN;WKJC;",
  };

  // uncomment this code
  // useEffect(() => {
  //   setLoadingTeamMember(true);
  //   sendRequest(`team-member/${params.teamMemberId}/show`, "GET")
  //     .then((res) => {
  //       if (res) {
  //         if (res.success) {
  //           setMemberDetails(res.teamMember);
  //         } else {
  //           alert(
  //             "A server error has occurred! Check your Internet Connection "
  //           );
  //         }
  //       }
  //     })
  //     .catch(() => {
  //       alert("A server error has occurred! Check your Internet Connection ");
  //     })
  //     .finally(() => {
  //       setLoadingTeamMember(false);
  //     });
  // }, [params.teamMemberId]);

  return (
    <>
      {loadingTeamMember ? (
        <Spinner variant="dark" />
      ) : (
        <Container className="py-4">
          <div className={styles["member-details-container"]}>
            <div className={styles["member-details-section1"]}>
              <div className={styles["member-details-section1-info"]}>
                <h1>{memberDetails.name}</h1>
                <p className={styles.position}>{memberDetails.position}</p>
                <p className={styles.certificates}>
                  {memberDetails.certificates.map((certificate, index) => {
                    // return <span>{certificate}, </span>;
                    return (
                      <span>{`${certificate}${
                        index !== memberDetails.certificates.length - 1
                          ? ", "
                          : ""
                      }`}</span>
                    );
                  })}
                </p>
              </div>

              <div className={styles["member-details-image-container"]}>
                <img alt={memberDetails.name} src={memberDetails.photo} />
              </div>
            </div>
            <p className={styles["member-details-section2"]}>
              {memberDetails.description}
            </p>
          </div>
        </Container>
      )}
    </>
  );
};
export default MemberDetails;

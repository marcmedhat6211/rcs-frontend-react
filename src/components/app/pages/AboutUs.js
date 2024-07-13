import { useEffect, useState } from "react";
import TeamMember from "../custom-components/about-us-comp/TeamMember";
import styles from "./AboutUs.module.scss";
// import { sendRequest } from "../../../services/api-service";
import { Spinner } from "react-bootstrap";

const teamMembers = [
  {
    id: Math.random(),
    photo: "https://reliancecompliance.ca/images/team/headshot_13.jpg",
    name: "name1",
    position: "position1",
  },
  {
    id: Math.random(),
    photo: "https://reliancecompliance.ca/images/team/headshot_13.jpg",
    name: "name2",
    position: "position2",
  },
  {
    id: Math.random(),
    photo: "https://reliancecompliance.ca/images/team/headshot_13.jpg",
    name: "name3",
    position: "position3",
  },
];

const AboutUs = () => {
  // const [teamMembers, setTeamMembers] = useState([]);
  const [loadingTeamMembers, setLoadingTeamMembers] = useState(false);
  // useEffect(() => {
  //   setLoadingTeamMembers(true);
  //   sendRequest("team-member/list", "GET")
  //     .then((res) => {
  //       if (res) {
  //         if (res.success) {
  //           setTeamMembers(res.teamMembers);
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
  //       setLoadingTeamMembers(false);
  //     });
  // }, []);
  return (
    <div className={styles["about-us-page"]}>
      <div className={styles["about-us-header"]}>
        <h1>About</h1>
        <p>
          Reliance Compliance Solutions Inc. (RCS) is a consulting company based
          in Toronto, Ontario with a focus <br /> on delivering exceptional
          compliance solutions to various reporting entities such as Banks,
          Credit Unions, MSBs and Virtual currency dealers.
        </p>
        <p>
          Our team of professionals can provide assistance in regulatory
          compliance, anti-money laundering, and counter terrorist financing.
          <br /> We help our clients be compliant with Canadian regulations by
          focusing on building a comprehensive Compliance/AML program.
          <br /> We offer a variety of services such as:
        </p>
        <ul className={styles["about-us-list"]}>
          <li className={styles["about-us-list-item"]}>
            AML/Compliance regime development
          </li>
          <li className={styles["about-us-list-item"]}>
            Manage compliance program
          </li>
          <li className={styles["about-us-list-item"]}>
            AML/Compliance effectiveness review
          </li>
          <li className={styles["about-us-list-item"]}>
            Regulatory exams (FINTRAC/AMF)
          </li>
          <li className={styles["about-us-list-item"]}>
            Bank onboarding/Audit
          </li>
          <li className={styles["about-us-list-item"]}>
            Compliance Officer or Chief AML Officer
          </li>
          <li className={styles["about-us-list-item"]}>AMF respondent</li>
          <li className={styles["about-us-list-item"]}>Training</li>
          <li className={styles["about-us-list-item"]}>Recruitment</li>
          <li className={styles["about-us-list-item"]}>Legal Services</li>
          <li className={styles["about-us-list-item"]}>
            Other advisory services{" "}
          </li>
        </ul>
      </div>
      <div>
        <h1>The Team</h1>
        <ul className={styles.team}>
          {teamMembers.map((teamMember) => {
            return (
              <li className={styles["team-member"]}>
                {loadingTeamMembers ? (
                  <Spinner variant="dark" />
                ) : (
                  <TeamMember
                    key={Math.random()}
                    id={teamMember.id}
                    photo={teamMember.photo}
                    name={teamMember.name}
                    position={teamMember.position}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default AboutUs;

import { Link } from "react-router-dom";
import styles from "./TeamMember.module.scss";

const TeamMember = ({ id, photo, name, position }) => {
  return (
    <div className={styles["team-member-container"]}>
      <Link to={`/team-member/${id}/details`}>
        <div className={styles["team-member-image-container"]}>
          <img
            className={styles["team-member-image"]}
            alt="team-member"
            src={photo}
          />
        </div>
        <h5>{name}</h5>
        <p>{position}</p>
      </Link>
    </div>
  );
};
export default TeamMember;

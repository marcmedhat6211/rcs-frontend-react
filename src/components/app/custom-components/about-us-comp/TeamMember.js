import { Link } from "react-router-dom";
import styles from "./TeamMembers.module.scss";

const TeamMember = ({ photo, name, position }) => {
  return (
    <div className={styles["team-member-container"]}>
      <Link>
        <div className={styles["team-member-image-container"]}>
          <img src={photo} />
        </div>
        <h5>{name}</h5>
        <p>{position}</p>
      </Link>
    </div>
  );
};
export default TeamMember;

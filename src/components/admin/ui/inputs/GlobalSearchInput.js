import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./GlobalSearchInput.module.scss";

const GlobalSearchInput = ({ className }) => {
  return (
    <InputGroup
      className={`${styles["search-input"]} ${className && className}`}
    >
      <InputGroup.Text>Search</InputGroup.Text>
      <Form.Control type="text" placeholder="Search by table fields..." />
    </InputGroup>
  );
};
export default GlobalSearchInput;

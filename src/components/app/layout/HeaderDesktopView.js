import { headerLinks } from "../../../constants/header-links";
import { Link } from "react-router-dom";
import desktopStyles from "./Header.module.scss";

const HeaderDeskTopView = () => {
  return (
    <ul className={desktopStyles["links-container"]}>
      {headerLinks.map((link) => {
        return (
          <Link
            to={link.route}
            key={Math.random()}
            className={desktopStyles["link"]}
          >
            {link.text}
          </Link>
        );
      })}
    </ul>
  );
};
export default HeaderDeskTopView;

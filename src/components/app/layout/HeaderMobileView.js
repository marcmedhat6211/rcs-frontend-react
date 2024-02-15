import { FiAlignJustify } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import mobileStyles from "./Header.module.scss";
import { headerLinks } from "../../../constants/header-links";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderMobileView = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const listButtonHandler = () => {
    setOverlayOpen(true);
  };
  return (
    <>
      <button
        className={mobileStyles["MobileView-list-button"]}
        type="button"
        onClick={listButtonHandler}
      >
        <FiAlignJustify className={mobileStyles["MobileView-list-icon"]} />;
      </button>
      <div
        className={`${mobileStyles.overlay} ${
          overlayOpen && mobileStyles["overlay-open"]
        }`}
      >
        <div className={mobileStyles["overlay-links-wrapper"]}>
          <button
            className={mobileStyles["overlay-exitButton"]}
            onClick={() => {
              setOverlayOpen(false);
            }}
          >
            <IoMdCloseCircleOutline
              className={mobileStyles["overlay-exitImage"]}
            />
          </button>
          <ul className={mobileStyles["overlay-links-container"]}>
            {headerLinks.map((link) => {
              return (
                <Link
                  to={link.route}
                  key={Math.random()}
                  className={mobileStyles["overlay-link"]}
                >
                  {link.text}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default HeaderMobileView;

import styles from "./HomePage.module.scss";
import homeTop2 from "../../../assets/images/homeTop2.png";
import partner1 from "../../../assets/images/partner1.jpg";
import partner2 from "../../../assets/images/partner2.jpg";
import partner3 from "../../../assets/images/partner3.jpg";
import partner4 from "../../../assets/images/partner4.png";
import Button1 from "../ui/buttons/Button1";
// ---

const HomePage = () => {
  return (
    <div className={styles["homePage-content-container"]}>
      <div className={styles["homePage-topImg-container"]}>
        <img src={homeTop2} className={styles["homePage-topImg"]}></img>
      </div>
      {/* <div className={styles["homePage-slider-container"]}>
        <Swiper1 />
      </div> */}
      <div className={styles["homepage-servicesText-container"]}>
        <p className={styles["homepage-servicesText"]}>
          Reliance Compliance Solutions "RCS" delivers various services to all
          FINTRAC reporting entities. Our most utilized services are:
          <ul>
            <li>Recruitment</li>
            <li>Legal Services</li>
            <li>CAMLO services</li>
            <li>Independent audit</li>
            <li>Annual AML training</li>
            <li>Specialized CAMLO training</li>
            <li>AML and compliance advisory plans</li>
          </ul>
        </p>
      </div>
      <div className={styles["homepage-plans-container"]}>
        <span className={styles["homepage-plans-title"]}>
          <h5>Compliance and AML Advisory Subscription Plans</h5>
        </span>
        <p>
          The following plans are best suited for Banks, Credit Unions, Money
          Service Business including dealers in virtual currencies
        </p>
        <div className={styles["homepage-plans-options-container"]}>
          <div className={styles["homepage-plans-options"]}>
            <h5>Basic</h5>
            <ul className={styles["homepage-plans-list"]}>
              <li>10 Hours of consultancy</li>
              <li>Stay apprised of regulatory changes</li>
              <li>Guidance/training on report submission and AML rules</li>
              <li>Assist with license renewal</li>
              <li>Answer all regulatory and AML questions</li>
              <li>
                Assistance with vendor selection, on-boarding and contract
                renewal (KYC, Training, TM, PEP/Sanctions Screening)
              </li>
            </ul>
            <div className="d-flex flex-column align-items-center">
              <Button1>6 Months</Button1>
              <Button1>12 Months</Button1>
            </div>
          </div>
          <div className={styles["homepage-plans-options"]}>
            <h5>Classic</h5>
            <ul className={styles["homepage-plans-list"]}>
              <li>13 hours of consultancy</li>
              <li>All services included in basic plan</li>
              <li>Perform quality check on FINTRAC reports</li>
              <li>Assist with bank audit</li>
              <li>Assist with independent audit</li>
              <li>Perform system/vendor testing</li>
              <li>Assist CAMLO with senior management report</li>
              <li>Assist with action plan for bank or independent audit</li>
            </ul>
            <div>
              <Button1>6 Months</Button1>
              <Button1>12 Months</Button1>
            </div>
          </div>
          <div className={styles["homepage-plans-options"]}>
            <h5>Premium</h5>
            <ul className={styles["homepage-plans-list"]}>
              <li>16 hours of consultancy</li>
              <li>All services included in basic plan</li>
              <li>All services included in classic plan</li>
              <li>Assist with FINTRAC or other regulatory examination</li>
              <li>Assist with policy updates</li>
              <li>Attend board meetings as a compliance advisor</li>
              <li>Assist with action plan for regulatory exam</li>
            </ul>
            <div>
              <Button1>6 Months</Button1>
              <Button1>12 Months</Button1>
            </div>
          </div>
        </div>
        <ul>
          <li>
            {" "}
            All plans include a template for potential client occupations
          </li>
          <li>
            All plans include templates for logging production order requests,
            PEPs/HIOs, high risk clients, adverse media, UTR and STR for record
            keeping purposes
          </li>
        </ul>
      </div>
      <h5>Our Partners</h5>
      <div className={styles["homepage-bottomImg-container"]}>
        <img className={styles["homepage-bottomImg"]} src={partner1}></img>
        <img className={styles["homepage-bottomImg"]} src={partner2}></img>
        <img className={styles["homepage-bottomImg"]} src={partner3}></img>
        <img className={styles["homepage-bottomImg"]} src={partner4}></img>
      </div>
    </div>
  );
};
export default HomePage;

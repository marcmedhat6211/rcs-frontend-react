import { Row, Col } from "react-bootstrap";
import contactUs from "../../../assets/images/rcs-contact-us.jpeg";
import Button1 from "../ui/buttons/Button1";
import { IoLocationSharp } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import classes from "./ContactUs.module.scss";
import ContactUsForm from "../custom-components/contact-us-comp/ContactUsForm";
// import { APIProvider, Map } from "@vis.gl/react-google-maps";

const ContactUs = () => {
  return (
    <div className={classes["contact-us-page"]}>
      <div className={classes["contact-us-header"]}>
        <h1>Contact Us</h1>
        <p>
          Where does your business need more support? We offer a broad range of
          services and packages that can be customized to your needs.
          <br />
          Send us a message today, and we can start you on a path to success.
        </p>
      </div>
      <section>
        <Row className="mb-5">
          <Col>
            <div className={classes["h2-location-container"]}>
              <h2 className="basic-1 p-0 mb-2">Headquarters</h2>
              <div className="mb-2 d-flex justify-content-start align-items-baseline">
                <IoLocationSharp />
                <p>101 Whitefish Crescent, Stoney Creek ON L8E 0A6</p>
              </div>
            </div>
            <div className={classes["h2-location-container"]}>
              <h2 className="basic-1 p-0 mb-2">Toronto Office</h2>
              <div className="mb-2 d-flex justify-content-start align-items-baseline">
                <IoLocationSharp />
                <p>3080 Yonge Street, Toronto, ON M4N 3N1</p>
              </div>
              <div>
                <TbMailFilled />
                <a href="mailto:info@reliancecompliance.ca">
                  info@reliancecompliance.ca
                </a>
              </div>
            </div>
            <Button1>Schedule an Appointment</Button1>
          </Col>
          <Col>
            <img src={contactUs}></img>
          </Col>
        </Row>
        <Row className="mb-5">
          <h3>Send us a message</h3>
          <ContactUsForm />
        </Row>
        <Row className="mb-5">
          {/* <APIProvider apiKey={API_KEY}>
            <Map
              style={{ width: "100vw", height: "100vh" }}
              defaultCenter={{ lat: 22.54992, lng: 0 }}
              defaultZoom={3}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            />
          </APIProvider> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2865082950652!2d-79.40501104950401!3d43.725374655677044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b32dd647aaaaf%3A0x22208ce94ddcb032!2s3080%20Yonge%20St%2C%20Toronto%2C%20ON%20M4N%203N1%2C%20Canada!5e0!3m2!1sen!2seg!4v1607200012966!5m2!1sen!2seg"
            width="1100"
            height="450"
            style={{ border: 0 }}
            aria-hidden="false"
          ></iframe>
        </Row>
      </section>
    </div>
  );
};
export default ContactUs;

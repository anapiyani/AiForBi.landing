import phones from "../../assets/phones.jpg";
import classes from "./styles.module.scss";

const About = () => {
  return (
    <div className={classes["about"]}>
      <div className="container">
        <div className={classes["about__content"]}>
          <div className={classes["about__content__picture"]}>
            <img src={phones} alt="AI" />
          </div>
          <div className={classes["about__content__texts"]}>
            <h2>Repeat, reorder and insert sections anywhere</h2>
            <p>
              Use info sections to place configurable image, text and button
              blocks. Alternate image alignment or hide the image altogether, it
              still looks great.
            </p>
            <button>Try Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

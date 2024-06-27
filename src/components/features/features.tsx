import hero from "../../assets/hero.png";
import classes from "./features.module.scss";

const Features = () => {
  return (
    <div className={classes["features"]}>
      <div className="container">
        <div className={classes["features__content"]}>
          <div className={classes["features__content__headertext"]}>
            <h1>Create dynamic page layouts using front-matter sections</h1>
          </div>
          <div className={classes["features__content__sections"]}>
            <div className={classes["features__content__sections__section"]}>
              <div
                className={
                  classes["features__content__sections__section__content"]
                }
              >
                <h2>Info Section</h2>
                <p>
                  Use info sections to place configurable image, text and button
                  blocks.
                </p>
              </div>
            </div>
            <div className={classes["features__content__sections__section"]}>
              <div
                className={
                  classes["features__content__sections__section__content"]
                }
              >
                <h2>Grid Section</h2>
                <p>
                  Hero sections make bold statements on any page. You have full
                  control over the background, text, alignment, height and more.
                </p>
              </div>
            </div>
            <div className={classes["features__content__sections__section"]}>
              <div
                className={
                  classes["features__content__sections__section__content"]
                }
              >
                <h2>Hero Section</h2>
                <p>
                  Hero sections make bold statements on any page. You have full
                  control over the background, text, alignment, height and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["features__hero"]}>
          <div className={classes["features__hero__content"]}>
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

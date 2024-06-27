import classes from "./styles.module.scss";
import mac from "../../assets/mac.jpg";

const Promo = () => {
  return (
    <div className={classes["promo"]}>
      <div className="container">
        <div className={classes["promo__content"]}>
          <div className={classes["promo__content__texts"]}>
            <h1>AI FOR BI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus at eos odio tempore quas dolore recusandae, laudantium
              illo placeat atque dicta nesciunt reiciendis. Vel, cupiditate!
            </p>
            <div className={classes["promo__content__texts__buttons"]}>
              <button>Try demo</button>
              <button>Documentation</button>
            </div>
          </div>
          <div className={classes["promo__content__picture"]}>
            <img src={mac} alt="mac" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;

import classes from "./styles.module.scss";

const Strip = () => {
  return (
    <div className={classes["strip"]}>
      <div className="container">
        <div className={classes["strip__content"]}>
          <h2>Kickstart your Hugo project</h2>
          <p>Save days and weeks with our best practice templates.</p>
          <button>Buy Theme</button>
        </div>
      </div>
    </div>
  );
};

export default Strip;

import classes from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <div className={classes["footer__content"]}>
          <div className={classes["footer__content__texts"]}>
            <p>AI FOR BI</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              quod.
            </p>
            <p>© 2017 - 2024 Privacy policy Manage cookies </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

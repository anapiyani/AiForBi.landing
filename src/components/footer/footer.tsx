import classes from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <div className={classes["footer__content"]}>
          <div className={classes["footer__content__texts"]}>
            <p>AI FOR BI</p>
            <p>
              <a href="#">Документация Microsoft Teams SDK</a> <br />
              <a href="#">Документация OpenAI GPT-4 API</a>
              <br />
              <a href="#">
                Документация API для распознавания речи и синтеза речи
              </a>
            </p>
            <p>© 2017 - 2024 Privacy policy Manage cookies </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

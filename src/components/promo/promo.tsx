import classes from "./styles.module.scss";
import doc from "../../assets/AiForBi.pdf";

const Promo = () => {
  return (
    <div id="about" className={classes["promo"]}>
      <div className="container">
        <div className={classes["promo__content"]}>
          <div className={classes["promo__content__texts"]}>
            <h1>AI FOR BI</h1>
            <p>
              Цель данного проекта – разработка бота Microsoft Teams,
              предназначенного для автоматизации процесса проведения тендеров в
              строительной компании. Бот будет взаимодействовать с участниками
              тендера и проектной командой, управляя процессом от начала до
              конца, обеспечивая его гладкое, эффективное и профессиональное
              проведение.
            </p>
            <div className={classes["promo__content__texts__buttons"]}>
              <a href="#">
                <button>Демо</button>
              </a>
              <a href={doc}>
                <button>Техническое задание</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;

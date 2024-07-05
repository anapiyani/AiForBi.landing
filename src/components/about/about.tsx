import phones from "../../assets/phone.jpeg";
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
            <h2>
              Взаимодействие продукта (с другими продуктами и компонентами)
            </h2>
            <p>
              Бот будет взаимодействовать с: <br />
              - Microsoft Teams для управления тендером и взаимодействия с
              пользователями.
              <br />
              - OpenAI GPT-4 для генерации текста.
              <br />
              - API для распознавания речи и синтеза речи.
              <br />
              - Бэкэндом для хранения данных и управления состояниями.
              <br />
              - СУБД компании для подтягивания протокола тендера перед каждым
              тендером.
              <br />
            </p>
            <button>Демо</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

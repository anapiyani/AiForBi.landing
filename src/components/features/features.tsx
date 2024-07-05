import hero from "../../assets/hero.jpeg";
import classes from "./features.module.scss";

const Features = () => {
  return (
    <div id="feat" className={classes["features"]}>
      <div className="container">
        <div className={classes["features__content"]}>
          <div className={classes["features__content__headertext"]}>
            <h1>Функции продукта</h1>
          </div>
          <div className={classes["features__content__sections"]}>
            <div className={classes["features__content__sections__section"]}>
              <div
                className={
                  classes["features__content__sections__section__content"]
                }
              >
                <h2>Регистрация участников</h2>
                <p>
                  - Запрос присутствия у каждого участника. <br />
                  - Повторные запросы при отсутствии ответа.
                  <br />
                  - Удаление отсутствующих участников из таблицы.
                  <br />
                </p>
              </div>
            </div>
            <div className={classes["features__content__sections__section"]}>
              <div
                className={
                  classes["features__content__sections__section__content"]
                }
              >
                <h2>Проведение торгов</h2>
                <p>
                  - Запрос шага у проектной команды.
                  <br />
                  - Запрос аванса у участников.
                  <br />
                  - Обновление и фиксация цен.
                  <br />
                </p>
              </div>
            </div>
            <div className={classes["features__content__sections__section"]}>
              <div
                className={
                  classes["features__content__sections__section__content"]
                }
              >
                <h2>Проведение торгов</h2>
                <p>
                  Запрос шага у проектной команды.
                  <br />
                  Запрос аванса у участников.
                  <br />
                  Обновление и фиксация цен.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className={classes["features__content__sections__section"]}>
              <div
                className={
                  classes["features__content__sections__section__content"]
                }
              >
                <h2>Переговоры</h2>
                <p>
                  - Продолжение переговоров по снижению цен. <br />
                  - Регулировка шага по запросу участников.
                  <br />
                </p>
              </div>
            </div>
            <div className={classes["features__content__sections__section"]}>
              <div
                className={
                  classes["features__content__sections__section__content"]
                }
              >
                <h2>Завершение тендера</h2>
                <p>
                  - Запрос у проектной команды на завершение или продолжение
                  тендера.
                  <br />
                  - Объявление завершения тендера и фиксация окончательных цен.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className={classes["features__content__sections__section"]}>
              <div
                className={
                  classes["features__content__sections__section__content"]
                }
              >
                <h2>Подтягивание протокола тендера</h2>
                <p>
                  - Протокол содержит следующие колонки: Лот №, Наименование
                  потенциального поставщика (подрядчика), Наименование товара,
                  Страна производитель, Первоначально-заявленная сумма, НДС,
                  Размер запрашиваемого авансового платежа, Вид обеспечения
                  возврата аванса (гарантия, залог), Заявленный срок выполнения
                  работ, Сумма озвученная после проведенного тендера,
                  Примечание, Особые условия.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="more" className={classes["features__hero"]}>
          <div className={classes["features__hero__content"]}>
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

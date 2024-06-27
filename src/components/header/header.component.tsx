import { useState } from "react";
import { useTheme } from "../../ThemeContext";
import classes from "./style.module.scss";

const Header = () => {
  const { toggleTheme } = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  return (
    <div className={classes.header}>
      <div className="container">
        <div className={classes.header__content}>
          <div className={classes.header__content__logotype}>
            <h1>AI FOR BI</h1>
          </div>
          <nav className={classes.header__content__nav}>
            <ul>
              <li>
                <a href="#">ABOUT AI</a>
              </li>
              <li>
                <a href="#">FEATURES</a>
              </li>
              <li>
                <a href="#">MORE</a>
              </li>
            </ul>
            <label className={classes.header__content__nav__switch}>
              <input
                type="checkbox"
                className={classes.header__content__nav__switch__input}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={classes.header__content__nav__switch__slider}
              ></span>
            </label>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

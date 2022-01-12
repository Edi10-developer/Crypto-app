import { Container } from "./styles";
import { ThemeToggle } from "../img/themeToggle.svg";

const SelectTheme = () => (
  <Container>
    <label className="switch">
      <img src={ThemeToggle} />
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  </Container>
);
export default SelectTheme;

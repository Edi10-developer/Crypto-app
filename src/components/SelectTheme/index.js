import { Container } from "./styles";

const SelectTheme = () => (
  <Container>
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  </Container>
);
export default SelectTheme;

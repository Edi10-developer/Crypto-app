import { Container } from "./styles";
import { ThemeToggleSvg } from "components/img/exports";

const SelectTheme = ({ theme, changeTheme }) => {
  return (
    <Container onClick={changeTheme}>
      <ThemeToggleSvg bgColor={theme.bgColor} textColor={theme.textColor} />
    </Container>
  );
};
export default SelectTheme;

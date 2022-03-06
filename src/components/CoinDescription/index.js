import { Container, DataIcon } from "./styles";

const CoinDescription = ({ description }) => (
  <Container>
    <DataIcon />
    <p>{description}</p>
  </Container>
);

export default CoinDescription;

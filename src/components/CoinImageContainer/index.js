import { ImageContainer, CoinImage } from "./styles";

const CoinImageContainer = ({ data }) => {
  const formattName = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  const { image, id, symbol } = data;
  return (
    <>
      <ImageContainer>
        <CoinImage src={image.small} alt={id} />
      </ImageContainer>
      {formattName(`${id}`)} &nbsp; ({symbol.toUpperCase()})
    </>
  );
};

export default CoinImageContainer;

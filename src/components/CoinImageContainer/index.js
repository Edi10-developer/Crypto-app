import { ImageContainer, CoinImage } from "./styles";

const CoinImageContainer = (props) => {
  const { coinImg, coinId, coinSymbol } = props.data;
  const formattName = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>
      <ImageContainer>
        <CoinImage src={coinImg} alt={coinId} />
      </ImageContainer>
      {formattName(`${coinId}`)} &nbsp; ({coinSymbol})
    </>
  );
};

export default CoinImageContainer;

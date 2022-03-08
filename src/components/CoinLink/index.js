import { LinkStyled, LinkIcon } from "../CoinSummary/styles";

const CoinLink = ({ link, handleClick }) => {
  return (
    <LinkStyled href={link} onClick={handleClick}>
      <LinkIcon />
      {link}
    </LinkStyled>
  );
};

export default CoinLink;

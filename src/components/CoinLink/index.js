import { LinkStyled, LinkIcon } from "../CoinSummary/styles";

const CoinLink = ({ link, handleClick, theme }) => {
  return (
    <LinkStyled href={link} onClick={handleClick}>
      <LinkIcon />
      {link}
    </LinkStyled>
  );
};

export default CoinLink;

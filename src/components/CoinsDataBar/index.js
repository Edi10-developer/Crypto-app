import { Progressbar } from "../exports";

const CoinsDataBar = (props) => {
  return (
    <ul>
      <li>Coins: 234</li>
      <li>Exchange: 344</li>
      <li>•{props.currency}1.56T</li>
      <li>
        {props.currency}124.45B <Progressbar />
      </li>
      <li>
        <img src={props.icon} alt={props.icon} />
        <Progressbar />
      </li>
      <li>
        <img src={props.icon} alt={props.icon}>
          <Progressbar />
        </img>
      </li>
    </ul>
  );
};

export default CoinsDataBar;

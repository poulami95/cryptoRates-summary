import "./Header.css";
import siteLogo from "../../../assets/images/cryptocurrency.png";

function Header() {
  return (
    <div className="headerWrapper">
      <div className="headerLogo">
        <img src={siteLogo} alt="" title="Site Logo" />
      </div>
      <div className="headerText">EXCHANGE RATES</div>
    </div>
  );
}
export default Header;

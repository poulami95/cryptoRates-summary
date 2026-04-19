import "./Header.css";
import siteLogo from "../../../assets/images/cryptocurrency.png";

function Header() {
  return (
    <div className="headerWrapper">
      <div className="header-inner">
        <div className="headerLogo">
          <img src={siteLogo} alt="Logo" title="Crypto Exchange Rates" />
        </div>
        <div className="header-text-group">
          <div className="headerText">CRYPTO EXCHANGE RATES</div>
          <div className="header-subtitle">LIVE MARKET DATA</div>
        </div>
      </div>
      <div className="header-glow-line" />
    </div>
  );
}

export default Header;

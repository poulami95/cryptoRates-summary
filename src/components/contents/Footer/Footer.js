import './Footer.css';
import logo from '../../../assets/images/cryptocurrency.png';

export default function Footer() {
    return (
        <div className="footerWrapper">
            <div className="footer-glow-line" />
            <div className="footer-content-wrapper">
                <img src={logo} alt="Logo" className="footer-image" />
                <span className="footer-content">
                    Developed by Poulami Saha
                    <span className="footer-sub-text">Best viewed in Google Chrome and Microsoft Edge.</span>
                </span>
            </div>
        </div>
    );
}

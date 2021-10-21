import './Footer.css';
import logo from '../../../assets/images/cryptocurrency.png';

export default function Footer(){
    return(
        <div className="footerWrapper">
                <div className="footer-content-wrapper">
                    <span className="footer-img-wrapper">
                        <img src={logo} alt="" className="footer-image"/>
                    </span>    
                    <span className="footer-content">
                        Developed by Poulami Saha<br/>
                        <span className="footer-sub-text">This site is best viewed in Google Chrome and Microsoft Edge.</span>
                    </span>
                </div>
        </div>
    )
}
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-right">
        <div className="icon-house">
          <ion-icon name="home-outline"></ion-icon>
        </div>
        <div className="icon-phone">
          <ion-icon name="call-outline"></ion-icon>
        </div>
        <div className="icon-mail">
          <ion-icon name="mail-outline"></ion-icon>
        </div>
      </div>
      <div className="footer-left">
        <div className="icon-info">
          <i className="icon-info-item">
            <ion-icon name="logo-facebook"></ion-icon>
          </i>
          <i className="icon-info-item">
            <ion-icon name="logo-github"></ion-icon>
          </i>
          <i className="icon-info-item">
            <ion-icon name="logo-instagram"></ion-icon>
          </i>
        </div>
        <div className="copy-right">© 2022 Copyright by Nguyen Thi Thuy Vi</div>
      </div>
    </div>
  );
};

export default Footer;

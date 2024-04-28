import fb from "../assets/facebook-f 2.png";
import twitter from "../assets/twitter_ic.png";
import insta from "../assets/instagram 2.png";
import whatsApp from "../assets/whatsapp 2.png";
import logo from "../assets/logo.png";
import footer_bg from "../assets/Mask group (1).png";

function FooterSection(props) {
  return (
    <div className="container p-0">
      <footer className="footer-container text-center text-lg-start position-relative px-5 py-3 py-lg-5 overflow-hidden">
        <div className="p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <img alt="logo" className="logo-leed mb-4" src={logo} />
              <p className="company-about">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="list-header mb-3">Solutions</h5>
              <ul className="list-unstyled list-custom mb-0">
                <li>
                  <a href="#!">Test 1</a>
                </li>
                <li>
                  <a href="#!">Test 2</a>
                </li>
                <li>
                  <a href="#!">Test 3</a>
                </li>
                <li>
                  <a href="#!">Test 4</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="list-header mb-3">Products</h5>
              <ul className="list-unstyled list-custom mb-0">
                <li>
                  <a href="#!">Test 1</a>
                </li>
                <li>
                  <a href="#!">Test 2</a>
                </li>
                <li>
                  <a href="#!">Test 3</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="list-header mb-3">Community</h5>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                <div className="social-img-container social-img-container">
                  <img alt="social-img" className="social-img" src={fb} />
                </div>
                <div className="social-img-container">
                  <img alt="social-img" className="social-img" src={twitter} />
                </div>
                <div className="social-img-container">
                  <img alt="social-img" className="social-img" src={insta} />
                </div>
                <div className="social-img-container">
                  <img alt="social-img" className="social-img" src={whatsApp} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="text-center p-3 copyright-txt">
          © Copyright 2024 Lead4Speed. All Rights Reserved.
        </div>
        <img
          alt="footer-bg"
          className="position-absolute footer-bg d-none d-lg-block"
          src={footer_bg}
        />
      </footer>
    </div>
  );
}

export default FooterSection;

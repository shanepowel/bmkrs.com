const { useEffect } = React;
const { HamburgerButton, getRootElement } = window.BmkrsComponents;

function ContactPage() {
  useEffect(() => {
    const menuTarget = document.getElementById("render");
    if (menuTarget) {
      ReactDOM.render(<HamburgerButton />, menuTarget);
    }

    const initSite = () => {
      if (typeof window.initSite === "function") {
        window.initSite();
      } else {
        setTimeout(initSite, 50);
      }
    };

    initSite();
  }, []);

  return (
    <div className="body-fade">
      <div id="render"></div>
      <div id="nav-placeholder"></div>

      <div className="nav">
        <a className="logowhites-4" href="/">
          <img src="/images/white.png" alt="bmkrs-logo-white" />
        </a>
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="/" className="hover-target">home</a>
            </li>
            <li className="nav__list-item">
              <a href="/discover/" className="hover-target">discover</a>
            </li>
            <li className="nav__list-item">
              <a href="/work/" className="hover-target">work</a>
            </li>
            <li className="nav__list-item">
              <a href="/discover/" className="hover-target">about</a>
            </li>
            <li className="nav__list-item">
              <a href="/motion/" className="hover-target">motion</a>
            </li>
            <li className="nav__list-item active-nav">
              <a href="/contact/" className="hover-target">contact</a>
            </li>
            <li className="nav-menu-slogan" id="mobile-menu-text">
              We are the Brandmakers.
            </li>
            <li className="copyrights" id="mobile-menu-copy">
              2020 © Brandmakers (BMKRS).
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-header">
        <div id="discovery-header">
          <div className="my-container3">
            <div className="wordwrap">
              <span id="getintouch-header" className="wordwrap">
                TEST
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="cont-container">
        <div data-aos="flip-left" style={{ marginTop: "-120px" }}>
          <div id="rel-container">
            <p>START A PROJECT</p>
            <div className="buttoncontainer4">
              <div className="button2">
                <a id="discover-button-link" href="mailto:office@bmkrs.com">
                  <p id="contact-button">Get in touch</p>
                  <svg>
                    <g>
                      <line y1="31.28" x2="227.62" y2="31.28" />
                      <polyline points="222.62 25.78 228.12 31.28 222.62 36.78" />
                      <circle
                        cx="224.67"
                        cy="30.94"
                        r="30.5"
                        transform="rotate(180 224.67 30.94) scale(1, -1) translate(0, -61)"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div id="rel-container2">
            <p>Have a question?</p>
            <a href="mailto:office@bmkrs.com">office@bmkrs.com</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div id="footer-placeholder"></div>
      </footer>
    </div>
  );
}

ReactDOM.render(<ContactPage />, getRootElement());

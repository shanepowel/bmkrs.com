const { useEffect } = React;
const { HamburgerButton, getRootElement } = window.BmkrsComponents;

function WorkPage() {
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
            <li className="nav__list-item active-nav">
              <a href="/work/" className="hover-target">work</a>
            </li>
            <li className="nav__list-item">
              <a href="/discover/" className="hover-target">about</a>
            </li>
            <li className="nav__list-item">
              <a href="/motion/" className="hover-target">motion</a>
            </li>
            <li className="nav__list-item">
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

      <div className="work-header">
        <div id="discovery-header">
          <div className="my-container3">
            <h1>
              <span id="worktitle">
                Intelligent brands<br />choose us.
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>

      <div className="ourwork">
        <h2 className="worktitle">
          Our work, our capabilities, <br />our desire to do the best for your business.
        </h2>
        <div className="column">
          <a href="/work/fdb/">
            <div className="img-hover-zoom">
              <img src="/work/images/fdb-2.png" alt="Floare Din Banat" />
              <div className="text-overlay">
                <h2>FLOARE DIN BANAT<br />E-COMMERCE</h2>
              </div>
            </div>
          </a>
          <a href="/work/project1">
            <div className="img-hover-zoom">
              <img src="/images/aboutus_qyrbat.webp" alt="Copa" />
              <div className="text-overlay">
                <h2>COPA<br />BRANDING</h2>
              </div>
            </div>
          </a>
          <a href="/work/project2">
            <div className="img-hover-zoom">
              <img src="/images/carter-instagram.png" className="center" alt="Carter" />
              <div className="text-overlay">
                <h2>CARTER<br />PHOTOGRAPHY</h2>
              </div>
            </div>
          </a>
          <a href="/work/project3">
            <div className="img-hover-zoom">
              <img src="/images/trip-of-my-life.png" alt="Wanderlust" />
              <div className="text-overlay">
                <h2>WANDERLUST<br />DESIGN</h2>
              </div>
            </div>
          </a>
          <a href="/work/project4">
            <div className="img-hover-zoom">
              <img src="/images/smoothies.png" alt="Smoothies" />
              <div className="text-overlay">
                <h2>SMOOTHIES<br />WEBDESIGN</h2>
              </div>
            </div>
          </a>
          <a href="/work/flipster-project">
            <div className="img-hover-zoom">
              <img src="/work/images/flipster-fff.png" alt="Flipster IPTV" />
              <div className="text-overlay">
                <h2>FLIPSTER IPTV<br />BRANDING</h2>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="clearfix"></div>

      <footer className="footer">
        <div id="footer-placeholder"></div>
      </footer>
    </div>
  );
}

ReactDOM.render(<WorkPage />, getRootElement());

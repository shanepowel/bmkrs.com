const { useEffect } = React;
const { HamburgerButton, getRootElement } = window.BmkrsComponents;

function DiscoverPage() {
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
      <div className="modal">
        <div className="modal-content">
          <span className="close-button">×</span>
          <h4>Section under construction.<br /> We will upload our projects soon.</h4>
        </div>
      </div>

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
            <li className="nav__list-item active-nav">
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

      <div className="discover-header">
        <div id="discovery-header">
          <div className="my-container3">
            <h1>
              <span id="discoverheading">
                Discover our capabilities—— Your brand's growth is in our hands
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>

      <div className="dis-container">
        <div data-aos="fade-up">
          <img src="/images/9c7ded037d751c42a0e92288c11998e8.jpg" alt="bmkrs-discover" />
        </div>
        <ul>
          <span id="discover-1">...</span>
          <p id="discover-subtext">...</p>
          <ul id="list1">
            <li className="one" id="discover-list1">...</li>
            <li className="one" id="discover-list2">...</li>
          </ul>
          <ul id="list2">
            <li className="two" id="discover-list3">...</li>
            <li className="two" id="discover-list4">...</li>
          </ul>
          <div className="buttoncontainer2">
            <a className="btn-slice" href="/work/">
              <div className="top"><span>SEE PROJECTS</span></div>
              <div className="bottom"><span>SEE PROJECTS</span></div>
            </a>
            <a className="btn-slice2" href="/work/">
              <div className="top"><span>SEE PROJECTS</span></div>
              <div className="bottom"><span>SEE PROJECTS</span></div>
            </a>
          </div>
        </ul>
      </div>

      <div className="dis-container-left">
        <div data-aos="fade-up">
          <img src="/images/7abd2549110b63f83e49877e1d59adea.jpg" alt="bmkrs-discover" />
        </div>
        <ul>
          <span id="discover-2">Websites & Design</span>
          <p id="discover-subtext2">
            We design digital platforms to empower users and your brand's tribe. This deep
            understanding of what motivates them allows us to forge and fine-tune the most
            powerful strategies that generate rapid ROI for your business.
          </p>
          <ul id="list1">
            <li className="one" id="discover-list1-2">UI/UX Design</li>
            <li className="one" id="discover-list2-2">Web Development</li>
          </ul>
          <ul id="list2">
            <li className="two" id="discover-list3-2">SEO Strategy</li>
            <li className="two" id="discover-list4-2">Digital Strategy</li>
          </ul>
          <div className="buttoncontainer2">
            <a className="btn-slice" href="/work/">
              <div className="top"><span>SEE PROJECTS</span></div>
              <div className="bottom"><span>SEE PROJECTS</span></div>
            </a>
            <a className="btn-slice2" href="/work/">
              <div className="top"><span>SEE PROJECTS</span></div>
              <div className="bottom"><span>SEE PROJECTS</span></div>
            </a>
          </div>
        </ul>
      </div>

      <div className="dis-container">
        <div data-aos="fade-up">
          <img src="/images/165-1655864_e-commerce-px-shopping-cart.jpg" alt="bmkrs-discover" />
        </div>
        <ul>
          <span id="discover-3">eCommerce Experience</span>
          <p id="discover-subtext3">
            eCommerce is all about experience, and we craft and co-create experiences that are
            both purposeful and equally profitable. Digital brand building through eCommerce
            channels fuels business growth and the bottom-line.
          </p>
          <ul id="list1">
            <li className="one" id="discover-list1-3">Digital Strategy</li>
            <li className="one" id="discover-list2-3">eCommerce Platforms</li>
          </ul>
          <ul id="list2">
            <li className="two" id="discover-list3-3">Industry Research</li>
            <li className="two" id="discover-list4-3">Design Direction</li>
          </ul>
          <div className="buttoncontainer2">
            <a className="btn-slice" href="/work/">
              <div className="top"><span>SEE PROJECTS</span></div>
              <div className="bottom"><span>SEE PROJECTS</span></div>
            </a>
            <a className="btn-slice2" href="/work/">
              <div className="top"><span>SEE PROJECTS</span></div>
              <div className="bottom"><span>SEE PROJECTS</span></div>
            </a>
          </div>
        </ul>
      </div>

      <div className="dis-container-left">
        <div data-aos="fade-up">
          <img src="/images/business.jpeg" alt="bmkrs-discover" />
        </div>
        <ul>
          <span id="discover-2">Performance Marketing</span>
          <p id="discover-subtext2">
            With a keen understanding of what's happening in the digital landscape, we leverage
            the power of marketing platforms to connect audiences with contagious content worth
            sharing & spreading, cross-channel and touchpoint.
          </p>
          <ul id="list1">
            <li className="one" id="discover-list1-4">Social Media Marketing</li>
            <li className="one" id="discover-list2-4">Growth Strategy</li>
          </ul>
          <ul id="list2">
            <li className="two" id="discover-list3-4">SEO</li>
            <li className="two" id="discover-list4-4">E-mail Marketing</li>
          </ul>
          <div className="buttoncontainer2">
            <a className="btn-slice" href="/work/">
              <div className="top"><span>SEE PROJECTS</span></div>
              <div className="bottom"><span>SEE PROJECTS</span></div>
            </a>
            <a className="btn-slice2" href="/work/">
              <div className="top"><span>SEE PROJECTS</span></div>
              <div className="bottom"><span>SEE PROJECTS</span></div>
            </a>
          </div>
        </ul>
      </div>

      <div className="clearfix"></div>

      <footer className="footer">
        <div id="footer-placeholder"></div>
      </footer>
    </div>
  );
}

ReactDOM.render(<DiscoverPage />, getRootElement());

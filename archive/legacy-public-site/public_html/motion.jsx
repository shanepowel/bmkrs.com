const { useEffect } = React;
const { HamburgerButton, getRootElement } = window.BmkrsComponents;

function MotionPage() {
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
            <li className="nav__list-item active-nav">
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

      <div className="in-motion-header">
        <div className="my-container3">
          <h2 className="meetclass">MEET</h2>
          <h1>
            <span className="inmotionheading2">Motion.</span>
          </h1>
          <p className="headaboutmotion">
            You are one email away of getting our services free for 1 month.
            <br />
            If you run a start-up or even a bigger business and want to get the chance to
            rank it up, let us know and we will do the rest.
            <br />
            Don't forget, intelligent brands choose us :)
          </p>
        </div>

        <div className="form-style-6">
          <h1>GET 1 MONTH FOR FREE</h1>
          <form action="../contact_process.php" method="post" id="contactForm" noValidate>
            <input type="text" name="field1" id="field1" placeholder="Your Name" />
            <input type="email" name="field2" id="field2" placeholder="Email Address" />
            <input type="text" name="business" id="business" placeholder="Your Business Name" />
            <select
              id="form_need"
              name="need_service"
              className="form-control"
              required
              data-error="Please specify your need."
            >
              <option value="Which service">What are you interested in?</option>
              <option value="Branding & Identity">Branding & Identity</option>
              <option value="Performance Marketing">Performance Marketing</option>
              <option value="Websites & Digital platforms">
                Websites & Digital platforms
              </option>
              <option value="eCommerce Platforms">eCommerce Platforms</option>
            </select>
            <textarea name="field3" id="field3" placeholder="Type your Message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>

      <div className="dis-container2">
        <ul>
          <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
            <h4 className="wyg">You choose one of our services and we work on it.</h4>
          </div>
          <div data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine">
            <div className="rowm">
              <div className="col">
                <h4 className="colserv">
                  Branding & <br />
                  Identity
                  <p></p>
                </h4>
                <div className="opa">
                  <p>Brand Strategy</p>
                  <p>Identity Design</p>
                  <p>Market Strategy</p>
                </div>
              </div>
              <div className="col">
                <h4 className="colserv">
                  Performance Marketing
                  <p></p>
                </h4>
                <div className="opa">
                  <p>Launch Strategy</p>
                  <p>Growth Strategy</p>
                  <p>Social Media Strategy</p>
                </div>
              </div>
              <div className="col">
                <h4 className="colserv">
                  Websites & Digital Platforms
                  <p></p>
                </h4>
                <div className="opa">
                  <p>UI & UX Design</p>
                  <p>SEO Strategy</p>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="col">
                <h4 className="colserv">
                  eCommerce Platforms
                  <p></p>
                </h4>
                <div className="opa">
                  <p>Digital Strategy</p>
                  <p>Design Direction</p>
                  <p>eCommerce Platforms</p>
                </div>
              </div>
            </div>
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

ReactDOM.render(<MotionPage />, getRootElement());

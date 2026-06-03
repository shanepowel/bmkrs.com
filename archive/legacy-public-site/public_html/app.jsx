const { useEffect } = React;
const { FadeInSection, HamburgerButton, getRootElement } =
  window.BmkrsComponents;

function App() {
  useEffect(() => {
    const initSite = () => {
      if (typeof window.initSite === "function") {
        window.initSite();
      } else {
        setTimeout(initSite, 50);
      }
    };

    initSite();

    const vid = document.getElementById("headvid");
    if (vid) {
      vid.playbackRate = 2.5;
      vid.onended = () => {
        setTimeout(() => {
          vid.play();
        }, 50000);
      };
      if (vid.paused) {
        vid.play();
      }
    }
  }, []);

  return (
    <div className="body-fade">
      <div className="nav">
        <a className="logowhites-4" href="/">
          <img src="/images/white.png" alt="bmkrs-logo-white" />
        </a>
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item active-nav">
              <a href="/" className="hover-target">
                home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="/discover/" className="hover-target">
                discover
              </a>
            </li>
            <li className="nav__list-item">
              <a href="/work/" className="hover-target">
                work
              </a>
            </li>
            <li className="nav__list-item">
              <a href="/discover/" className="hover-target">
                about
              </a>
            </li>
            <li className="nav__list-item">
              <a href="/motion/" className="hover-target">
                motion
              </a>
            </li>
            <li className="nav__list-item">
              <a href="/contact/" className="hover-target">
                contact
              </a>
            </li>
            <li className="nav-menu-slogan" id="mobile-menu-text"></li>
            <li className="copyrights" id="mobile-menu-copy">
              2020 © Brandmakers (BMKRS).
            </li>
          </ul>
        </div>
      </div>

      <div id="render">
        <HamburgerButton />
      </div>

      <div id="nav-placeholder"></div>

      <div className="header-home">
        <div className="webvideo">
          <video id="headvid" playsInline autoPlay muted loop width="2520">
            <source src="/images/headvid4.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="my-container2">
          <h1 id="second-heading">Media Agency —— <br />Rank your business up !</h1>
          <a className="btn-slice2" href="/discover/">
            <div className="top">
              <span>DISCOVER</span>
            </div>
            <div className="bottom">
              <span>DISCOVER</span>
            </div>
          </a>
        </div>

        <div className="heading-cont-footer">
          <h2 id="footer-heading">
            Think big —— <br /> of your Business.
          </h2>
        </div>
      </div>

      <div id="loader-wrapper">
        <div id="loader"></div>
        <h2 className="ml7">
          <span className="text-wrapper">
            <span className="letters"></span>
          </span>
        </h2>
        <div className="loader-section"></div>
        <div className="loader-section section-right"></div>
      </div>

      <FadeInSection>
        <div className="info-containerhead">
          <span id="first-heading">
            <h2 id="first-heading">#stayhome</h2>
          </span>
        </div>
      </FadeInSection>

      <div className="content2">
        <div className="info-container-inmotion">
          <ul id="container-inmotion">
            <div data-aos="fade-right" data-aos-offset="150" data-aos-easing="ease-in-sine">
              <h3>MEET</h3>
            </div>
            <span className="inmotionheading">Motion.</span>
            <div data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine">
              <p>Our capabilities 3 months for free.</p>
            </div>
          </ul>
          <a href="/motion/">
            <div className="buttoncontainer" id="inmotion-header">
              <div className="pulse-box">
                <svg
                  className="pulse-svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 50 50"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <polyline
                    points="222.62 25.78 228.12 31.28 222.62 36.78"
                    visibility="visible"
                  />
                </svg>
              </div>
              <div className="pulse-box">
                <div className="pulse-css"></div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="content">
        <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div className="info-container">
            <ul id="Container1Body">
              <p id="Container1Body">
                Based in the <strong>heart of London</strong>, we are a Digital Design
                Agency providing our customers and their brands with high class
                concept, design, analysis and marketing strategies, helping them
                ranking their business up.
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="ourwork">
          <div className="row">
            <div className="column">
              <div data-aos="fade-up" data-aos-offset="50" data-aos-easing="ease-in-sine">
                <a href="/discover/">
                  <div className="image2"></div>
                </a>
                <a href="/discover/">Branding & Identity</a>
                <p href="/discover/">Read more about Branding & Identity</p>
              </div>
              <div data-aos="fade-up" data-aos-offset="50" data-aos-easing="ease-in-sine">
                <a href="/discover/">
                  <div className="image3"></div>
                </a>
                <a href="/discover/">eCommerce Experience</a>
                <p href="/discover/">Read more about eCommerce Experience</p>
              </div>
            </div>
            <div className="column-right">
              <div data-aos="fade-up" data-aos-offset="50" data-aos-easing="ease-in-sine">
                <a href="/discover/">
                  <div className="image4"></div>
                </a>
                <a href="/discover/">Websites & Digital platforms</a>
                <p href="/discover/">Read more about Websites & Design</p>
                <div data-aos="fade-up" data-aos-offset="50" data-aos-easing="ease-in-sine">
                  <a href="/discover/">
                    <div className="image5"></div>
                  </a>
                  <a href="/discover/">Performance Marketing</a>
                  <p href="/discover/">Read more about Performance Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="btn-slice" href="/work/">
          <div className="top">
            <span>OUR CAPABILITIES</span>
          </div>
          <div className="bottom">
            <span>OUR CAPABILITIES</span>
          </div>
        </a>
      </div>

      <div className="dis-container2">
        <ul>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
            <h4 id="growh4">How can we help you ?</h4>
          </div>
          <div className="rowm">
            <div data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine">
              <div className="col" id="growcol">
                <h4 className="growtitle">
                  Innovate<p></p>
                </h4>
                <div className="opa">
                  <p id="growp">
                    Sometimes, the future is hard to predict. We help businesses
                    succeed in a constantly-changing world by imagining new
                    scenarios, exploring new ideas, and testing new solutions – all
                    without disrupting your day-to-day.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine">
              <div className="col" id="growcol">
                <h4 className="growtitle">
                  Design<p></p>
                </h4>
                <div className="opa">
                  <p id="growp">
                    Whether you’re launching a new product or need help with a
                    specific challenge, we’ll build a team around your needs,
                    helping you deliver more value, faster. Collaboration is in our
                    DNA – we can work together in our space, or yours.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine">
              <div className="col" id="growcol">
                <h4 className="growtitle">
                  Grow<p></p>
                </h4>
                <div className="opa">
                  <p id="growp">
                    Do you need to grow your audience? Could your data be in
                    better shape? Is your product truly driving business results?
                    With expertise across content, analytics and performance, we
                    can help.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine">
              <div className="col" id="growcol">
                <h4 className="growtitle">
                  Learn<p></p>
                </h4>
                <div className="opa">
                  <p id="growp">
                    From one-off workshops through to long-term training
                    programmes, we can help you get the most from your own team.
                    If you’re looking to evolve your digital capability, our
                    discipline experts can help get you ready for what’s next.
                  </p>
                </div>
              </div>
            </div>
            <a className="btn-slice" href="/contact/">
              <div className="top">
                <span>CONTACT US</span>
              </div>
              <div className="bottom">
                <span>CONTACT US</span>
              </div>
            </a>
          </div>
        </ul>
      </div>

      <div className="exp-container">
        <div className="brand-img">
          <div data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine">
            <img src="/images/tag_icon.png" alt="bmkrs-brand-pic" />
          </div>
        </div>
        <ul>
          <div data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease-in-sine">
            <p>WE SPECIALIZE IN</p>
            <li>
              <h3>
                <a href="/discover/" className="effect-shine">
                  Branding & Identity
                </a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="/discover/" className="effect-shine">
                  Social Media Platforms
                </a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="/discover/" className="effect-shine">
                  Websites & Digital Platforms
                </a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="/discover/" className="effect-shine">
                  Market Analytics
                </a>
              </h3>
            </li>
          </div>
        </ul>
      </div>

      <div className="info-container3">
        <div className="inmotion">
          <div data-aos="fade-up" data-aos-offset="350" data-aos-easing="ease-in-sine">
            <ul id="Container3Body">
              <span className="word">Meet</span>
              <span className="motionword">Motion.</span>
              <p>TRY OUR MOTION PROGRAM <br />3 MONTHS FREE</p>
              <a className="btn-slice2" href="/motion/">
                <div className="top">
                  <span>MEET MOTION</span>
                </div>
                <div className="bottom">
                  <span>MEET MOTION</span>
                </div>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="liber"></div>
      <div className="clearfix"></div>

      <div className="content">
        <footer className="footer">
          <div id="footer-placeholder"></div>
        </footer>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, getRootElement());

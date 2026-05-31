const { useEffect } = React;
const { HamburgerButton, getRootElement } = window.BmkrsComponents;

function ProjectPage({ title, client, background, problem, media }) {
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

      <div className="container-intro">
        <div id="work-header">
          <div className="my-container3">
            <h1>
              <span className="kakamaka1" id="worktitle">
                Intelligent brands<br />choose us.
              </span>
            </h1>
          </div>
          <div className="my-container4">
            <span className="kakamaka">
              Our work, <br /> our capabilities, <br /> our desire
            </span>
          </div>
        </div>
      </div>

      <div className="ourwork">
        <div className="ourwork2">
          <div className="container-desc">
            <h1 className="work-title-mobile">{title}</h1>
            {client && (
              <>
                <h2>The Client</h2>
                <p>{client}</p>
              </>
            )}
            {background && (
              <>
                <h2>Background</h2>
                <p>{background}</p>
              </>
            )}
            {problem && (
              <>
                <h2>The Problem</h2>
                <p>{problem}</p>
              </>
            )}
          </div>
          <div className="scroll-icon">
            <img src="/images/scroll.png" alt="scroll" />
          </div>
          <div className="container-wrapper">
            <div className="container-desc-right">
              {media &&
                media.map((item, idx) => {
                  if (item.type === "image") {
                    return <img key={idx} src={item.src} alt={item.alt || ""} />;
                  } else if (item.type === "iframe") {
                    return (
                      <iframe
                        key={idx}
                        src={item.src}
                        width={item.width || "640"}
                        height={item.height || "480"}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    );
                  } else if (item.type === "html") {
                    return (
                      <div
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    );
                  }
                  return null;
                })}
            </div>
          </div>
        </div>
        <div className="buttoncontainer2">
          <a className="btn-slice2" href="/work/">
            <div className="top">
              <span>ALL PROJECTS</span>
            </div>
            <div className="bottom">
              <span>ALL PROJECTS</span>
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

// Initialize with project data from window.PROJECT_DATA
if (window.PROJECT_DATA) {
  ReactDOM.render(<ProjectPage {...window.PROJECT_DATA} />, getRootElement());
}

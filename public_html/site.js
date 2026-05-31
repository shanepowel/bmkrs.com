window.initSite = function initSite() {
  if (window.AOS && typeof window.AOS.init === "function") {
    window.AOS.init();
  }

  var page = document.body ? document.body.getAttribute("data-page") : "";

  if (typeof window.topmenu === "function") {
    window.topmenu();
  }
  if (page === "home" && typeof window.headings === "function") {
    window.headings();
  }
  if (page === "home" && typeof window.worktext === "function") {
    window.worktext();
  }
  if (page === "discover" && typeof window.discover === "function") {
    window.discover();
  }
  if (page === "contact" && typeof window.contact === "function") {
    window.contact();
  }
  if (page === "motion" && typeof window.inmotion === "function") {
    window.inmotion();
  }

  if (window.jQuery) {
    const $ = window.jQuery;

    $(function () {
      $("#nav-placeholder").load("/header.html");
    });

    $(function () {
      $("#footer-placeholder").load("../footer.html");
    });

    $("#inmotion-header").click(function () {
      setTimeout(function () {
        console.log("hi");
      }, 5000);
    });

    $(document).ready(function () {
      setTimeout(function () {
        $("body").addClass("loaded");
        $("h1").css("color", "#fff");
      }, 1200);
    });

    $(".body-fade").css("display", "none");
    $(".body-fade").fadeIn(600);

    var newLocation = "";

    $(".link").click(function (event) {
      event.preventDefault();
      newLocation = this.href;
      $(".body-fade").fadeOut(600, newpage);
    });

    function newpage() {
      window.location = newLocation;
    }

    $.fn.followTo = function (elem) {
      var $this = this,
        $window = $(window),
        $bumper = $(elem),
        bumperPos = $bumper.offset().top,
        thisHeight = $this.outerHeight(),
        setPosition = function () {
          if ($window.scrollTop() > bumperPos - thisHeight) {
            $this.css({
              position: "absolute",
              top: bumperPos - thisHeight,
            });
          } else {
            $this.css({
              position: "fixed",
              top: 0,
            });
          }
        };

      $window.resize(function () {
        bumperPos = $bumper.offset().top;
        thisHeight = $this.outerHeight();
        setPosition();
      });

      $window.scroll(setPosition);
      setPosition();
    };

    if ($(".header-home").length && $(".info-container").length) {
      $(".header-home").followTo(".info-container");
    }

    var modal = document.querySelector(".modal");
    if (modal) {
      var closeButton = document.querySelector(".close-button");
      var triggers = [
        document.querySelector("#modal1"),
        document.querySelector("#modal2"),
        document.querySelector("#modal3"),
        document.querySelector("#modal4"),
      ];

      var toggleModal = function () {
        modal.classList.toggle("show-modal");
      };

      var windowOnClick = function (event) {
        if (event.target === modal) {
          toggleModal();
        }
      };

      triggers.forEach(function (trigger) {
        if (trigger) {
          trigger.addEventListener("click", toggleModal);
        }
      });

      if (closeButton) {
        closeButton.addEventListener("click", toggleModal);
      }

      window.addEventListener("click", windowOnClick);
    }

    var scrollTarget = null;
    var scrollDelay = 1000;
    if (page === "discover") {
      scrollTarget = ".dis-container";
    } else if (page === "work") {
      scrollTarget = ".ourwork";
    } else if (page === "contact") {
      scrollTarget = ".cont-container";
    } else if (page === "project") {
      scrollTarget = ".container";
      scrollDelay = 3000;
    }

    if (scrollTarget && $(scrollTarget).length) {
      window.setTimeout(function () {
        $("html, body").animate(
          {
            scrollTop: $(scrollTarget).offset().top,
          },
          "slow"
        );
      }, scrollDelay);
    }

    if (page === "project" && $(".ourwork").length) {
      var initTopPosition = $(".ourwork").offset().top;
      $(window).scroll(function () {
        if ($(window).scrollTop() > initTopPosition) {
          $(".ourwork").css({ position: "fixed", top: "0px" });
        } else {
          $(".ourwork").css({
            position: "absolute",
            top: initTopPosition + "px",
          });
        }
      });
    }

    var setupScrollUp2 = function (selector) {
      var navbar = $(selector);
      if (!navbar.length) {
        return;
      }
      var c = 0;
      $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
        if (c < a && a > b + b) {
          navbar.addClass("scrollUp2");
        } else if (c > a && !(a <= b)) {
          navbar.removeClass("scrollUp2");
        }
        c = a;
      });
    };

    setupScrollUp2(".menu-icon");
    setupScrollUp2(".Navbar__Link-brand2");

    var navbarScroll = $(".navbar");
    if (navbarScroll.length) {
      $(window).on("load", function () {
        navbarScroll.addClass("hideonLoad");
      });

      var cNavbar = 0;
      $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbarScroll.height();
        if (cNavbar < a && (a > b + b || a === 0)) {
          navbarScroll.removeClass("hideonLoad");
          navbarScroll.addClass("scrollUp");
        } else if (cNavbar > a && !(a <= b)) {
          navbarScroll.removeClass("scrollUp");
        }
        cNavbar = a;
      });
    }
  }

  var menu = document.querySelector("#render");
  var body = document.querySelector("body");
  if (menu && body) {
    menu.addEventListener("click", function () {
      body.classList.toggle("nav-active");
    });
  }

  var toggleNavbar = function () {
    var navs = document.querySelectorAll(".navbar");
    navs.forEach(function (nav) {
      nav.classList.toggle("toggle-background");
    });
  };

  var toggleLogoWhite = function () {
    var navs = document.querySelectorAll(".logowhites");
    navs.forEach(function (nav) {
      nav.classList.toggle("toggle-logo");
    });
  };

  var toggleLogoBlack = function () {
    var navs = document.querySelectorAll(".logoblacks");
    navs.forEach(function (nav) {
      nav.classList.toggle("toggle-logo2");
    });
  };

  var toggleItems = function () {
    var navs = document.querySelectorAll(".Navbar__Items");
    navs.forEach(function (nav) {
      nav.classList.toggle("Navbar__ToggleShow");
    });
  };

  var toggle1 = document.querySelector(".Navbar__Link-toggle");
  var toggle2 = document.querySelector(".Navbar__Link-toggle2");
  if (toggle1) {
    toggle1.addEventListener("click", toggleNavbar);
    toggle1.addEventListener("click", toggleLogoWhite);
    toggle1.addEventListener("click", toggleLogoBlack);
    toggle1.addEventListener("click", toggleItems);
  }
  if (toggle2) {
    toggle2.addEventListener("click", toggleNavbar);
    toggle2.addEventListener("click", toggleLogoWhite);
    toggle2.addEventListener("click", toggleLogoBlack);
    toggle2.addEventListener("click", toggleItems);
  }

  if (window.anime) {
    var textWrapper = document.querySelector(".ml7 .letters");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      window.anime
        .timeline({ loop: true })
        .add({
          targets: ".ml7 .letter",
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: "easeOutExpo",
          delay: function (el, i) {
            return 50 * i;
          },
        })
        .add({
          targets: ".ml7",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }

    var headerWrapper = document.querySelector(".info-containerhead");
    if (headerWrapper) {
      headerWrapper.innerHTML = headerWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      window.anime
        .timeline({ loop: true })
        .add({
          targets: ".info-containerhead .letter",
          scale: [2, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 850,
          delay: function (el, i) {
            return 70 * i;
          },
        })
        .add({
          targets: ".info-containerhead",
          opacity: 0,
          duration: 3000,
          easing: "easeOutExpo",
          delay: 3000,
        });
    }
  }
};

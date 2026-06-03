<?php
readfile(__DIR__ . "/index.html");
exit;
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>BMKRS | We are the Brandmakers | Digital Media Agency</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<link href="https://bmkrs.com/favicon.ico" rel="shortcut icon" type="image/x-icon" >
<meta property="og:title" name="title" content="BMKRS | We are the Brandmakers | Digital Media Agency">
<meta property="og:description" name="description" content="Media Agency —— Rank your business up | We are specializing in digital branding solutions, social strategy development and web design. ">
<meta property="og:url" content="https://bmkrs.com/" />
<meta property="og:image" content="/images/bmkrs_white_instapic.png">
<meta name="keywords" content="branding,social media,marketing,advertising">
<meta name="author" content="Adrian Tan">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preload" as="font" href="/fonts/Avenir/AvenirNext.otf" type="font/woff2" crossorigin="anonymous">
<link rel="preload" as="font" href="/fonts/Avenir/AvenirNextLTPro-Bold.otf" type="font/woff2" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="styles.css">
<link rel="stylesheet" type="text/css" href="/styles/mobile.css">
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<!-- SCRIPTS -->
<script src="https://kit.fontawesome.com/45475bf449.js" SameSite=Secure></script>
<script async src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
<script src="https://unpkg.com/react-motion/build/react-motion.js"></script>
<script src="/scripts/jquery-3.4.1.min.js"></script>
<script src="/scripts/variable.js"></script>
<!-- SCRIPTS -->



<meta data-n-head="ssr" data-hid="robots" name="robots" content="index follow">
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-44404620-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-44404620-2');
</script>



</head>
<body onload="topmenu()">
  <script>
    AOS.init();
  </script>
<!-------- PHP CODE -------->

<?php
     include_once('class/simpleCMS.php');

     $dbhost = "localhost";
     $dbuser = "root";
     $dbpass = "root";
     $dbname = "bmkrs_db";
     $db = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

     $query = "SELECT * FROM testDB ORDER BY created DESC LIMIT 1;";
     $rows = mysqli_query($db, $query);
     if ( $rows !== false && mysqli_num_rows($rows) > 0 ) {
     while($row = mysqli_fetch_assoc($rows))
     $bodytext = stripslashes($row['bodytext']);
     }
     $ftitle = "SELECT * FROM FronTitleDB ORDER BY created DESC LIMIT 1;";
     $rows = mysqli_query($db, $ftitle);
     if ( $rows !== false && mysqli_num_rows($rows) > 0 ) {
     while($row = mysqli_fetch_assoc($rows))
     $rankup = stripslashes($row['rankup']);
     }
     $atitle = "SELECT * FROM AnimTitleDB ORDER BY created DESC LIMIT 1;";
     $rows = mysqli_query($db, $atitle);
     if ( $rows !== false && mysqli_num_rows($rows) > 0 ) {
     while($row = mysqli_fetch_assoc($rows))
     $animtit = stripslashes($row['animtit']);
     }
     ?>
<!-------- PHP CODE -------->
<!------------ H E A D E R header.html -------------->
<!------------- MOBILE MENU ANIMATION -------------->
<div class="nav">
  <a class="logowhites-4" href="/"><img src="/images/white.png" alt="bmkrs-logo-white"></a>
  

      <div class="nav__content">
        
          <ul class="nav__list">
              <li class="nav__list-item active-nav"><a href="/" class="hover-target">home</a></li>
      <li class="nav__list-item"><a href="/discover/" class="hover-target">discover</a></li>
      <li class="nav__list-item"><a href="/work/" class="hover-target">work</a></li>
      <li class="nav__list-item"><a href="/discover/" class="hover-target">about</a></li>
      <li class="nav__list-item"><a href="/motion/" class="hover-target">motion</a></li>
              <li class="nav__list-item"><a href="/contact/" class="hover-target">contact</a></li>
         
              <li class="nav-menu-slogan" id="mobile-menu-text"></li>
              <li class="copyrights" id="mobile-menu-copy">2020 © Brandmakers (BMKRS).</li>
          </ul>
      </div>
  </div>	
<!------------- MOBILE MENU ANIMATION -------------->
<div id="render"></div>
<script type="text/babel" src="/hamburger.js"></script>
<div id="nav-placeholder">
</div>
<script>
$(function(){
  $("#nav-placeholder").load("header.html");
});
</script>


<!------------- H E A D E R header.html -------------->
 			

<!----------- H E A D I N G  I M A G E  -------------->

  <div class="header-home">
    <div class="webvideo">
      <video id="headvid" playsinline autoplay muted loop width="2520" playbackrate="3">
          <source src="/images/headvid4.mp4"
                  type="video/mp4">
      </video>
      </div>

      <script>var vid = document.getElementById("headvid");
        vid.playbackRate = 2.5;
        
        vid.onended = function() {
          setTimeout(function(){
            vid.play(); //will play after 10 seconds when video is ended
          }, 50000);
        };
        vid.play(); // will play on load.</script>
       <div class="my-container2">
   
        
      <?php
     {
      echo "<h1 id='second-heading'>$rankup</h1>";
     }
    
     ?>
  
        <a class="btn-slice2" href="/discover/">
          <div class="top"><span>DISCOVER</span></div>
            <div class="bottom"><span>DISCOVER</span></div>
        </a>
      </div>
       <!-- <div class="buttoncontainer" id="headingbutton">
        <div class="button3"><a id="first-button-link" href="/discover/">
          <span id="first-button">...</span>
            <svg>
             <g>
               <polyline points="222.62 25.78 228.12 31.28 222.62 36.78" visibility="visible"/>
               <circle cx="224.67" cy="30.94" r="30.5" transform="rotate(180 224.67 30.94) scale(1, -1) translate(0, -61)"visibility="visible"/> 
             </g>
           </svg>
          </a>
         </div>
        </div> -->

       

<!----------- T H I N K   B I G    B O T T O M   F I X   T E X T   ------------->

        <div class="heading-cont-footer">
        
          <h2 id="footer-heading">Think big —— <br> of your Business.</h2>
        
         </div>   

<!----------- T H I N K   B I G    B O T T O M   F I X   T E X T   ------------>

  </div>

<div id="loader-wrapper">
  
  <div id="loader"></div>
  <h2 class="ml7">
    <span class="text-wrapper">
      <span class="letters"></span>
    </span>
  </h2>
  <div class="loader-section"></div>
  <div class="loader-section section-right"></div>

</div>

<FadeInSection>
    <div class="info-containerhead">
          <span id="first-heading">
            
          <?php
     {
      echo "<h2 id='first-heading'>$animtit</h2>";
     }
    
     ?>
          </span>
          
        </div>

<!----------- H E A D I N G  I M A G E  ------------->


<!----------- M E E T    M O T I O N    B U L L E T   CAPABILITIES------------->

        <div class="content2">
          <div class="info-container-inmotion">
              <ul id="container-inmotion">
                <div data-aos="fade-right"
     data-aos-offset="150"
     data-aos-easing="ease-in-sine"><h3>MEET</h3></div>
     <span class="inmotionheading">Motion.</span>
     <div data-aos="fade-right"
     data-aos-offset="250"
     data-aos-easing="ease-in-sine"><p>Our capabilities 3 months for free.</p></div>
              </ul>
               <a href="/motion/"><div class="buttoncontainer" id="inmotion-header">
              
                  <div class="pulse-box">
                    <svg class="pulse-svg" width="50px" height="50px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <polyline points="222.62 25.78 228.12 31.28 222.62 36.78" visibility="visible"/>
                    </svg>
                  </div>
                  <div class="pulse-box">
                    <div class="pulse-css"></div>
                  </div>
                
                </div> </a>
              
          </div>
        </div>
<!----------- M E E T    M O T I O N    B U L L E T  CAPABILITIES------------->


  <!----------- D E E P   R O U T E D  ------------->

  <div class="content">
    <div data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <div class="info-container">
        <ul id="Container1Body">

  
     <?php
     {
      echo "<p id='bodytext'>$bodytext</p>";
     }
    
     ?>
    

</ul>

    </div></div>
  </div>

<!----------- D E E P   R O U T E D  ------------->

<!----------- W O R K     I M A G E S  ------------->


    <div class="content">
<div class="ourwork">
  <div class="row">
    <div class="column">
      <div data-aos="fade-up"
     data-aos-offset="50"
     data-aos-easing="ease-in-sine"><a href="/discover/"><div class="image2"></div></a>
      <a href="/discover/">Branding & Identity</a>
      <p href="/discover/">Read more about Branding & Identity</p></div>
    
      <div data-aos="fade-up"
     data-aos-offset="50"
     data-aos-easing="ease-in-sine"><a href="/discover/"><div class="image3"></div></a>
      <a href="/discover/">eCommerce Experience</a>
      <p href="/discover/">Read more about eCommerce Experience</p>
     </div>
    </div>
     <div class="column-right">
      <div data-aos="fade-up"
     data-aos-offset="50"
     data-aos-easing="ease-in-sine"><a href="/discover/"><div class="image4"></div></a>
      <a href="/discover/">Websites & Digital platforms</a>
      <p href="/discover/">Read more about Websites & Design</p>
      <div data-aos="fade-up"
     data-aos-offset="50"
     data-aos-easing="ease-in-sine"><a href="/discover/"><div class="image5"></div></a>
      <a href="/discover/">Performance Marketing</a>
      <p href="/discover/">Read more about Performance Marketing</p>
     </div>
    </div>
  </div>
</div> 
<a class="btn-slice" href="/work/">
  <div class="top"><span>OUR CAPABILITIES</span></div>
    <div class="bottom"><span>OUR CAPABILITIES</span></div>
</a>

</div>
    </div>

<!----------- W O R K     I M A G E S  ------------->

<!----------- H O W   C A N   W E   H E L P --------->

<div class="dis-container2">
  <ul>
    <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"><h4 id="growh4">How can we help you ?</h4></div>
   
    <div class="rowm">
        
      <div data-aos="fade-up"
      data-aos-offset="150"
      data-aos-easing="ease-in-sine"> 
    <div class="col" id="growcol">
      <h4 class="growtitle">Innovate<p></h4>
        <div class="opa">
        <p id="growp">Sometimes, the future is hard to predict. We help businesses succeed in a constantly-changing world by imagining new scenarios, exploring new ideas, and testing new solutions – all without disrupting your day-to-day.</p>
        </div>
        </div></div>
        <div data-aos="fade-up"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"> 
        <div class="col" id="growcol">
          <h4 class="growtitle">Design<p></h4>
            <div class="opa"> 
            <p id="growp">Whether you’re launching a new product or need help with a specific challenge, we’ll build a team around your needs, helping you deliver more value, faster. Collaboration is in our DNA – we can work together in our space, or yours.</p>
              </div>
            </div></div>
            <div data-aos="fade-up"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"> 
            <div class="col" id="growcol">
              <h4 class="growtitle">Grow<p></h4>
                <div class="opa"> 
                <p id="growp">Do you need to grow your audience? Could your data be in better shape? Is your product truly driving business results? With expertise across content, analytics and performance, we can help.</p>
                  </div>
                </div></div>
                <div data-aos="fade-up"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"> 
                <div class="col" id="growcol">
                  <h4 class="growtitle">Learn<p></h4>
                    <div class="opa">  
                    <p id="growp">From one-off workshops through to long-term training programmes, we can help you get the most from your own team. If you’re looking to evolve your digital capability, our discipline experts can help get you ready for what’s next.</p>
                    </div>
                    </div></div>

                    <a class="btn-slice" href="/contact/">
                      <div class="top"><span>CONTACT US</span></div>
                        <div class="bottom"><span>CONTACT US</span></div>
                    </a>
       
  </div>
</div>
</ul>
</div>
<!----------- W E   S P E C I A L I Z E   I N  ------------->

    <div class="exp-container">
      <div class="brand-img"><div data-aos="fade-up"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"> 

      
   
     
      <img src="/images/tag_icon.png" alt="bmkrs-brand-pic"> 
      </div></div>
<ul>
  <div data-aos="fade-up"
                data-aos-offset="150"
                data-aos-easing="ease-in-sine"> 
    <p>WE SPECIALIZE IN</p>

    <li><h3><a href="/discover/" class="effect-shine">Branding & Identity</a></h3></li>
    <li><h3><a href="/discover/" class="effect-shine">Social Media Platforms</a></h3></li>
    <li><h3><a href="/discover/" class="effect-shine">Websites & Digital Platforms</a></h3></li>
    <li><h3><a href="/discover/" class="effect-shine">Market Analytics</a></h3></li>
  </div>
  </ul>
    </div>


<!----------- W E   S P E C I A L I Z E   I N  ------------->




   
    <div class="info-container3"><div class="inmotion">
      <div data-aos="fade-up"
     data-aos-offset="350"
     data-aos-easing="ease-in-sine"><ul id="Container3Body">
        
          <span class="word">Meet</span>
          <span class="motionword">Motion.</span>
       
        <p>TRY OUR MOTION PROGRAM <br>3 MONTHS FREE</p>
        <a class="btn-slice2" href="/motion/">
          <div class="top"><span>MEET MOTION</span></div>
            <div class="bottom"><span>MEET MOTION</span></div>
        </a>
      </ul></div>
     </div>
    </div>
    
    <div class="liber">
      
  </div>

  </div> 
  <div class="clearfix"></div>
</div>
</div>
</div>
</div>

</body>
<div class="content">
  <footer class="footer">

<!----------- F O O T E R footer.html ------------->
<div id="footer-placeholder">

</div>

<script>
$(function(){
  $("#footer-placeholder").load("../footer.html");
});
</script>

<!------------ F O O T E R footer.html ------------>


</footer>
</div>
</html>

<script>
  headings();
</script>
<script>
  worktext();
</script>
<script>

  // MENU JQUERY 
  
  (function($) { "use strict";
        
    //Page cursors
  
      
    //Navigation
  
    var app = function () {
      var body = undefined;
      var menu = undefined;
      var menuItems = undefined;
      var init = function init() {
        body = document.querySelector('body');
        menu = document.querySelector('#render');
        menuItems = document.querySelectorAll('.nav__list-item');
        applyListeners();
      };
      var applyListeners = function applyListeners() {
        menu.addEventListener('click', function () {
          return toggleClass(body, 'nav-active');
        });
      };
      var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
      };
      init();
    }();
  
    
    //Switch light/dark
          
                
  })(jQuery); 
</script>
<script>
$('#inmotion-header').click(function (event) {
    setTimeout(function () { console.log('hi'); }, 5000);
});
</script>

<script>
  $(document).ready(function() {
 setTimeout(function(){
     $('body').addClass('loaded');
     $('h1').css('color','#fff');
 }, 1200);

});
</script>


  <script>
    function classToggle() {
      const navs = document.querySelectorAll('.navbar')
      
      navs.forEach(nav => nav.classList.toggle('toggle-background'));
    }
    
    document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle),
    document.querySelector('.Navbar__Link-toggle2')
      .addEventListener('click', classToggle);
    </script>
<script>
  function classToggle() {
    const navs = document.querySelectorAll('.logowhites')
    
    navs.forEach(nav => nav.classList.toggle('toggle-logo'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);
    document.querySelector('.Navbar__Link-toggle2')
    .addEventListener('click', classToggle);
  </script>

  <script>
    function classToggle() {
      const navs = document.querySelectorAll('.logoblacks')
      
      navs.forEach(nav => nav.classList.toggle('toggle-logo2'));
    }
    
    document.querySelector('.Navbar__Link-toggle')
      .addEventListener('click', classToggle);
      document.querySelector('.Navbar__Link-toggle2')
    .addEventListener('click', classToggle);
    </script>

<script>
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);
  document.querySelector('.Navbar__Link-toggle2')
    .addEventListener('click', classToggle);
</script>



<script>
$(document).ready(function() {

$('.body-fade').css('display', 'none');
$('.body-fade').fadeIn(600);

$('.link').click(function(event) {
event.preventDefault();

newLocation = this.href;

$('.body-fade').fadeOut(600, newpage);

});

function newpage() {

window.location = newLocation;

}

});
</script>
<script>
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
</script>


<script>
  // Writing effect
  // Wrap every letter in a span
var textWrapper = document.querySelector('.info-containerhead');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})

.add({
  targets: '.info-containerhead .letter',
  scale: [2,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 850,
  delay: (el, i) => 70*i
}).add({
  targets: '.info-containerhead',
  opacity: 0,
  duration: 3000,
  easing: "easeOutExpo",
  delay: 3000,
  
});
</script>


<script>
var windw = this;

$.fn.followTo = function ( elem ) {
    var $this = this,
        $window = $(windw),
        $bumper = $(elem),
        bumperPos = $bumper.offset().top,
        thisHeight = $this.outerHeight(),
        setPosition = function(){
            if ($window.scrollTop() > (bumperPos - thisHeight)) {
                $this.css({
                    position: 'absolute',
                    top: (bumperPos - thisHeight)
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 0
                });
            }
        };
    $window.resize(function()
    {
        bumperPos = pos.offset().top;
        thisHeight = $this.outerHeight();
        setPosition();
    });
    $window.scroll(setPosition);
    setPosition();
};

$('.header-home').followTo('.info-container');
</script>
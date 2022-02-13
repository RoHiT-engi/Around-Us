import * as React from "react";

import Navbar from "../components/Navbar";
import "../css/Home.css";

import BlogAdd from "./BlogAdd";


const Home = () => {
  return (
    <div>
      <div div className="navMenu">
        {/* Navbar Starts */}
        <Navbar />
      </div>
      <div class="lines">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  

</div>
      <div className="page">
        <div className="div1">
          <h1 id="a">Do you feel that what you do is never good enough?</h1>

          <h2 id="c">Then you may be suffering from Imposter Syndrome </h2>
          <br />
          <h2 id="b">
            Imposter Syndrome affects your sense of self worth, happiness,
            progress and affects <br /> most of the people at some point in
            their lifetime. It may be at academic leevel or work level.
            <br />
            Accepting your imposter syndrome will allow you to accept that you
            deserve <br /> your success and allow you to reach greater heights
            in you life.
            <br />
          </h2>
        </div>
        <div class="div4">
          <center>
            <iframe
              width="700"
              height="400"
              title="yt video"
              src="https://www.youtube.com/embed/ZQUxL4Jm1Lo"
              frameborder="50"
              allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </center>
        </div>
        <br />
        {/* <span class="line_break">********************************</span> */}

        <div class="div2">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div class="blog_post">
                  <div class="container_copy">
                    <h1 class="blog_h1">Name</h1>
                    <br />
                    <h3 class="blog_h3">12 January 2019</h3>
                    <br />
                    <h2 class="blog_h2">CSS Positioning</h2>
                    <h4 class="blog_h4">
                      The position property specifies the type of positioning
                      method used for an element (static, relative, absolute,
                      fixed, or sticky).
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-sm">
                <div class="blog_post">
                  <div class="container_copy">
                    <h1 class="blog_h1">Name</h1>
                    <br />
                    <h3 class="blog_h3">12 January 2019</h3>
                    <br />
                    <h2 class="blog_h2">CSS Positioning</h2>
                    <h4 class="blog_h4">
                      The position property specifies the type of positioning
                      method used for an element (static, relative, absolute,
                      fixed, or sticky).
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-sm">
                <div class="blog_post">
                  <div class="container_copy">
                    <h1 class="blog_h1">Name</h1>
                    <br />
                    <h3 class="blog_h3">12 January 2019</h3>
                    <br />
                    <h2 class="blog_h2">CSS Positioning</h2>
                    <h4 class="blog_h4">
                      The position property specifies the type of positioning
                      method used for an element (static, relative, absolute,
                      fixed, or sticky).
                    </h4>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <br />
            <div>
              <a class="btn_primary" id="left" href="/addblog">
                Write a Blog
              </a>
              <a class="btn_primary" id="right " href="#readmore">
                Read More
              </a>
            </div>
          </div>
        </div>

      </div>
      <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Around Us</h1>
        
    <h2>Contact</h2>
    
    <address>
      Ramrao Adik Institute of Technology, Nerul, Navi Mumbai.<br/>
          
      <a class="footer__btn" href="mailto:pranavyede@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Stacks</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        <ul/>
       
        <li>
          <a href="#">Facebook</a>
        </li>
        
        <li>
          <a href="#">Instagram</a>
        </li>
        
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; Around Us 2022. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made by team Pied Piper <span class="heart">♥</span></span>
    </div>
  </div>
</footer>
      </div>
      
      
    
  );
};

export default Home;
